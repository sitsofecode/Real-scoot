import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
export const config = {
  plateform: "com.sit.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();
client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.plateform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");
    console.log(redirectUri);

    const response = account.createOAuth2Token(OAuthProvider.Google, redirectUri);
    console.log(response);

    if (!response) {
      throw new Error("Failed to Login");
    }

    const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);

    if (browserResult.type !== "success") throw new Error("Failed to Login ");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to Login");
    const session = account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create new session ");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
