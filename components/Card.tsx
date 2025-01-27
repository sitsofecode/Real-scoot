import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Models } from 'react-native-appwrite';


interface Props {
    item: Models.Document;
    onPress?: () => void;
}


export const FeatureCards = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={() => (console.log('clicked')
        )} className='relative  flex flex-col w-60 , h-72 rounded-2xl '>
            <Image source={{
                uri: item.
                    image
            }} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='absolute size-full rounded-2xl' />
            <View className='bg-white/80 rounded-full flex flex-row items-center absolute top-5 right-5 px-2 p-1'>
                <Image source={icons.star} />
                <Text className='text-primary-300 font-rubikBold ml-2 text-xl'>
                    $  {item.rating}
                </Text>
            </View>
            <View className='absolute bottom-5  px-5 flex flex-row justify-between w-full'>
                <View>
                    <Text className='text-white font-rubikBold text-2xl mb-2 '>
                        {item.name}
                    </Text>
                    <Text className='text-white font-rubikLight text-xl mb-2'>
                        {item.address}
                    </Text>
                    <Text className='text-white font-rubikBold text-2xl'>
                        {item.price}
                    </Text>
                </View>
                <Image source={icons.heart} className='size-6 absolute bottom-0 right-5' />
            </View>

        </TouchableOpacity>
    );
}




export const Card = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='  flex flex-col w-48 px-3  py-4   shadow-sm shadow-black-100/45 relative bg-white rounded-2xl'>
            <Image source={{ uri: item.image }} className='w-full h-40 rounded-lg' />
            <View className=' rounded-full flex flex-row items-center bg-white/80 absolute top-6 right-5 px-2 p-1'>
                <Image source={icons.star} />
                <Text className='text-primary-300 font-rubikBold ml-2 text-xl'>
                    {item.rating}
                </Text>
            </View>
            <View className='  flex flex-col  '>
                <Text className='text-black-300 font-rubikBold text-2xl mb-2 '>
                    {item.name}
                </Text>
                <Text className='text-black-100 font-rubikLight text-xl mb-2 '>
                    {item.address}
                </Text>
                <View className=' flex flex-row items-center justify-between'>
                    <Text className='text-primary-300 font-rubikBold text-2xl'>
                        $ {item.price}
                    </Text>
                    <Image source={icons.heart} className='size-6' tintColor={"#8C8E98"} />
                </View>
            </View>

        </TouchableOpacity>
    );
}


export const ExploreCard = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='  flex flex-row w-full px-5  py-4 mt-5  shadow-sm shadow-black-100/45  bg-white rounded-2xl'>
            <View className='relative w-28 h-28 rounded-lg'>
                <Image source={{ uri: item.image }} className='w-28 h-28 rounded-lg' />
                <View className=' rounded-full flex flex-row items-center bg-white/80 absolute top-1 right-1 px-2 p-1'>
                    <Image source={icons.star} />
                    <Text className='text-primary-300 font-rubikBold ml-2 text-xl'>
                        {item.rating}
                    </Text>
                </View>
            </View>
            <View className='  flex  flex-row items-center justify-between mx-4 h-full'>
                <View className='w-1/2'>
                    <Text className='text-black-300 font-rubikBold text-2xl mb-2 '>
                        {item.name}
                    </Text>
                    <Text className='text-black-100 font-rubikLight text-xl mb-2 '>
                        {item.address}
                    </Text>
                </View>
                <View className=' flex flex-col-reverse items-end  '>
                    <Text className='text-primary-300 font-rubikBold text-2xl mt-10'>
                        $ {item.price}
                    </Text>
                    <Image source={icons.heart} className='size-6' tintColor={"#8C8E98"} />
                </View>
            </View>

        </TouchableOpacity>
    );
}



