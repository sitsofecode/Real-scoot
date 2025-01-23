import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "@/constants/images";
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const SignIn = () => {

  const { isLoggedIn, user, loading, refetch } = useGlobalContext()


  if (!loading && isLoggedIn) { return <Redirect href="/" /> }
  const handleLogin = async () => {
    try {
      const result = await login();
      if (result) {
        refetch({})
      }
    } catch (error) {

    }
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName="h-full" >
        <Image source={images.onboarding} className='w-full h-4/6 ' resizeMode='contain' />
        <View className='px-10'>
          <Text className='text-center text-lg text-black-100  font-rubik uppercase'>Welcome to Real Scout</Text>
          <Text className='text-3xl text-center  text-black font-rubikBold mt-5'>Let’s Get You Closer {"\n"}
            To  <Text className='text-primary-300'>Your Ideal Home</Text></Text>
          <Text className='text-center text-lg text-black-100  font-rubik mt-10 '>Login to Real Scout with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md rounded-full shadow-zinc-300 w-full py-4 px-auto mt-5'>
            <View className='flex flex-row items-center justify-center '>
              <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
              <Text className='text-lg font-rubikMedium ml-2 text-black '>
                Sign Up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn