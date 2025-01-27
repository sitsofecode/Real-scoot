import { Card, FeatureCards } from "@/components/Card";
import EmptyPage from "@/components/EmptyPage";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import { featuredCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { useAppwrite } from "@/lib/useAppWrite";
import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();

  const params = useLocalSearchParams<{ query?: string, filter?: string }>();
  const { data: latestProperties, loading: latestPropertiesLoading } = useAppwrite({ fn: getLatestProperties });

  const { data: properties, loading, refetch } = useAppwrite({ fn: getProperties, params: { filter: params.filter ?? '', query: params.query ?? '', limit: 6 }, skip: true });

  useEffect(() => {
    refetch({ filter: params.filter ?? '', query: params.query ?? '', limit: 6 });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => { router.push(`/properties/${id}`) }
  return (
    <SafeAreaView
      className=" h-full bg-white "
    >
      {latestPropertiesLoading && loading ? (
        <View className="flex justify-center items-center h-full">
          <ActivityIndicator size="large" className="text-primary-300" />
        </View>
      ) : (
        < FlatList data={properties}
          keyExtractor={(item) => item.$id}
          contentContainerClassName="pb-32"
          columnWrapperClassName="flex gap-4 px-5 mt-5"
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListEmptyComponent={loading ?
            <ActivityIndicator size="large" className="text-primary-300" />
            : <EmptyPage />}
          renderItem={({ item }) => (
            <Card item={item} onPress={() => handleCardPress} />)}

          ListHeaderComponent={
            () => (
              <View className="px-4">
                <View className="flex flex-row justify-between items-center " >
                  <View className="flex flex-row items-center">
                    <Image source={{ uri: user?.avatar }} resizeMode='contain' className='size-16 rounded-full' />
                    <View className="ml-4">
                      <Text className="text-black-100 text-lg font-rubik">Good Morning </Text>
                      <Text className="text-black-300 font-rubikBold text-xl">{user?.name} </Text>
                    </View>
                  </View>
                  <Image source={icons.bell} resizeMode='contain' className='size-6' />
                </View>
                <Search />

                {!latestProperties || latestProperties.length === 0 ? <View></View> : (
                  <View>
                    <View className="flex flex-row justify-between items-center mt-4 ">
                      <Text className="text-black-300 font-rubikBold text-xl  ">Featured </Text>
                      <TouchableOpacity  >
                        <Text className="text-primary-300 font-rubikBold text-xl ">See more</Text>
                      </TouchableOpacity>
                    </View>


                    <View className="mt-4 flex flex-row gap-5">
                      <FlatList data={latestProperties}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.$id}
                        bounces={false}
                        contentContainerClassName="flez flex-row gap-4 "
                        renderItem={({ item }) => <FeatureCards item={item} onPress={() => console.log('clicked')
                        } />}
                      />

                    </View>
                  </View>)}
                <View className="flex flex-row justify-between items-center mt-4 p-0 ">
                  <Text className="text-black-300 font-rubikBold  text-xl">Our Recommendation </Text>
                  <TouchableOpacity  >
                    <Text className="text-primary-300 font-rubikBold text-xl ">See more</Text>
                  </TouchableOpacity>
                </View>
                <Filters />
              </View>
            )
          }
        />)}
    </SafeAreaView>
  );
}
