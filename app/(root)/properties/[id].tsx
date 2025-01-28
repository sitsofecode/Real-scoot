import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import icons from '@/constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useAppwrite } from '@/lib/useAppWrite';
import { getProperties, getPropertyById } from '@/lib/appwrite';
import images from '@/constants/images';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Comment from '@/components/Comment';

const Property = () => {
  const { id } = useLocalSearchParams();
  const windowHeight = Dimensions.get("window").height;
  const { data: property } = useAppwrite({ fn: getPropertyById, params: { id: Array.isArray(id) ? id[0] : id! } });


  return (
    <View className='h-full bg-white '>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-20 bg-white "      >
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image source={{ uri: property?.image }} className='size-full' resizeMode='cover' />
          <Image source={images.whiteGradient} className='size-full absolute top-0 bottom-0 z-400' />
          <View className=' flex flex-row justify-between items-center absolute top-20 px-5 w-full'>
            <TouchableOpacity onPress={() => { router.back() }} className="">
              <Image source={icons.backArrow} resizeMode='contain' className='size-7' />
            </TouchableOpacity>
            <View className='flex flex-row items-center'>
              <Image source={icons.heart} className='size-7' tintColor={"#191D31"} />

              <TouchableOpacity onPress={() => {
                console.log("favorite ");
              }} className=" p-2 rounded-full ml-5">
                <Image source={icons.send} resizeMode='contain' className='size-7' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <SafeAreaView>
          <View className='m-5 border-b border-primary-200 pb-5'>
            <Text className='text-xl  font-rubikBold text-black-300 '>
              {property?.name}
            </Text>
            <View className=' flex flex-row items-center mt-5'>
              <View className='mr-4 bg-primary-200 px-4  p-1 rounded-full'>
                <Text className='text-primary-300 text-lg font-rubikMedium '>
                  {property?.type}
                </Text>
              </View>
              <Image source={icons.star} className='size-5' />
              <Text className='text-black-200 font-rubikMedium text-lg ml-2'>
                {property?.rating}  ({property?.reviews.length} reviews)
              </Text>
            </View>
            <View className='flex  flex-row justify-between items-center mt-5'>
              <View className='flex flex-row gap-5 items-center'>
                <View className='bg-primary-200 p-2 rounded-full'>
                  <Image source={icons.bed} className='size-5' />
                </View>
                <Text>{property?.bedrooms} Beds</Text>
              </View>
              <View className='flex flex-row gap-5 items-center'>
                <View className='bg-primary-200 p-2 rounded-full'>
                  <Image source={icons.bath} className='size-5' />
                </View>
                <Text>{property?.bathrooms} bath</Text>
              </View>
              <View className='flex flex-row gap-5 items-center'>
                <View className='bg-primary-200 p-2 rounded-full'>
                  <Image source={icons.area} className='size-5' />
                </View>
                <Text>{property?.area} areas </Text>
              </View>
            </View>
          </View>

          <View className='m-5'>
            <Text className='text-xl font-rubikBold text-black-300'>
              Agent
            </Text>
            <View className="flex flex-row justify-between items-center mt-5 " >
              <View className="flex flex-row items-center">
                <Image source={{
                  uri: property?.agent.avatar
                }} resizeMode='contain' className='size-16 rounded-full bg-black-300' />
                <View className="ml-4">
                  <Text className="text-black-300 font-rubikBold text-xl">{property?.agent.name} </Text>
                  <Text className="text-black-100 text-lg font-rubik">Owner</Text>
                </View>
              </View>
              <View className='flex flex-row items-center'>
                <Image source={icons.chat} resizeMode='contain' className='size-6 mr-5' />
                <Image source={icons.phone} resizeMode='contain' className='size-6' />
              </View>
            </View>
            <View className='mt-5'>
              <Text className='text-xl text-black-300 font-rubikBold'>
                Overview
              </Text>
              <Text className=' text-black-200 text-lg font-rubik mt-5'>
                {property?.description}
              </Text>
            </View>
          </View>
          <View className='m-5'>
            <Text className='text-xl text-black-300 font-rubikBold'>
              Facilities
            </Text>
            <Facilities facilities={property?.facilities
            } />
          </View>
          <View className='m-5'>
            <Text className='text-xl text-black-300 font-rubikBold'>
              Gallery
            </Text>
            {property?.gallery.length > 0 ? <Gallery gallery={property?.gallery} /> : <View className='h-32 w-full flex justify-center items-center bg-primary-100  mt-5 rounded-lg'><Text className='text-xl font-rubikMedium text-primary-300 '>Empty Gallery</Text></View>}
          </View>
          <View className="m-5">
            <Text className="text-black-300 text-xl font-rubikBold">
              Location
            </Text>
            <View className="flex flex-row items-center justify-start mt-4 gap-2">
              <Image source={icons.location} className="w-7 h-7" />
              <Text className="text-black-200 text-sm font-rubikMedium">
                {property?.address}
              </Text>
            </View>

            <Image
              source={images.map}
              className="h-52 w-full mt-5 rounded-xl"
            />
          </View>

          {property?.reviews.length > 0 && (
            <View className="m-5 mt-0">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <Image source={icons.star} className="size-6" />
                  <Text className="text-black-300 text-xl font-rubikBold ml-2">
                    {property?.rating} ({property?.reviews.length} reviews)
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubikBold">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="mt-5">
                <Comment item={property?.reviews[0]} />
              </View></View>)}
        </SafeAreaView>
      </ScrollView>
      <View className="absolute bg-white bottom-0 w-full rounded-full border-t border-r border-l border-primary-200 p-7">
        <View className="flex flex-row items-center justify-between gap-10">
          <View className="flex flex-col items-start">
            <Text className="text-black-200 text-xs font-rubikMedium">
              Price
            </Text>
            <Text
              numberOfLines={1}
              className="text-primary-300 text-start text-2xl font-rubikBold"
            >
              ${property?.price}
            </Text>
          </View>

          <TouchableOpacity className="w-2/3 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full ">
            <Text className="text-white text-lg text-center font-rubikBold">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Property