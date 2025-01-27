import { Card, ExploreCard, FeatureCards } from "@/components/Card";
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
const Explore = () => {
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
      className=" h-full bg-gray-50/80 "
    >

      < FlatList data={properties}
        keyExtractor={(item) => item.$id}
        contentContainerClassName="pb-32 px-4"

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={loading ?
          <View className="flex justify-center items-center h-full">
            <ActivityIndicator size="large" className="text-primary-300" />
          </View>
          : <EmptyPage />}
        renderItem={({ item }) => (
          <ExploreCard item={item} onPress={() => handleCardPress} />)}

        ListHeaderComponent={
          () => (
            <View className="px-4">
              <View className="flex flex-row justify-between items-center " >

                <TouchableOpacity onPress={() => { router.back }} className="bg-primary-200 p-2 rounded-full">
                  <Image source={icons.backArrow} resizeMode='contain' className='size-6' />
                </TouchableOpacity>
                <Text className="text-black-300 font-rubikBold text-xl">Search for Your Ideal Home </Text>
                <Image source={icons.bell} resizeMode='contain' className='size-6' />
              </View>
              <Search />
              <Filters />
              <Text className="mt-5 font-rubikBold text-black-300 text-xl">
                Found { }Apartments
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  )
}

export default Explore
