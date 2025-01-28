import { Card, ExploreCard, FeatureCards } from "@/components/Card";
import EmptyPage from "@/components/EmptyPage";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { getProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppWrite";
import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Explore = () => {

  const params = useLocalSearchParams<{ query?: string, filter?: string }>();

  const { data: properties, loading, refetch } = useAppwrite({ fn: getProperties, params: { filter: params.filter ?? "", query: params.query ?? "" }, skip: true });

  useEffect(() => {
    refetch({ filter: params.filter ?? "", query: params.query ?? "" });
    console.log(params.filter, params.query);

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
          <ExploreCard item={item} onPress={() => handleCardPress(item.$id)} />)}

        ListHeaderComponent={
          () => (
            <View className="px-4">
              <View className="flex flex-row justify-between items-center " >

                <TouchableOpacity onPress={() => { router.back() }} className="bg-primary-200 p-2 rounded-full">
                  <Image source={icons.backArrow} resizeMode='contain' className='size-6' />
                </TouchableOpacity>
                <Text className="text-black-300 font-rubikBold text-xl">Search for Your Ideal Home </Text>
                <Image source={icons.bell} resizeMode='contain' className='size-6' />
              </View>
              <Search />
              <Filters />
              <Text className="mt-5 font-rubikBold text-black-300 text-xl">
                Found {properties?.length} Apartments
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  )
}

export default Explore
