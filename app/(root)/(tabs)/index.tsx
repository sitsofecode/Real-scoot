import { Card, FeatureCards } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import { featuredCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user, refetch } = useGlobalContext()

  return (
    <SafeAreaView
      className=" h-full bg-white "
    >

      < FlatList data={[1, 2]}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-4 px-5 mt-5"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <Card onPress={() => console.log('clicked')} />)}

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
              <View className="flex flex-row justify-between items-center mt-4 ">
                <Text className="text-black-300 font-rubikBold ">Featured </Text>
                <TouchableOpacity  >
                  <Text className="text-primary-300 font-rubikBold">See more</Text>
                </TouchableOpacity>
              </View>


              <View className="mt-4 flex flex-row gap-5">
                <FlatList data={[1, 2, 3]}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.toString()}
                  bounces={false}
                  contentContainerClassName="flez flex-row gap-4 "
                  renderItem={({ item }) => <FeatureCards onPress={() => console.log('clicked')
                  } />}
                />

              </View>
              <View className="flex flex-row justify-between items-center mt-4 p-0 ">
                <Text className="text-black-300 font-rubikBold ">Our Recommendation </Text>
                <TouchableOpacity  >
                  <Text className="text-primary-300 font-rubikBold">See more</Text>
                </TouchableOpacity>
              </View>
              <Filters />
              <View className="mt-4 flex flex-row gap-2">
                {/* <FlatList  /> */}

              </View>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}
