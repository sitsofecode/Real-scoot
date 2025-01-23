import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Models } from 'react-native-appwrite';


interface Props {
    // item: Models.Document;
    onPress?: () => void;
}


export const FeatureCards = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={() => (console.log('clicked')
        )} className='relative  flex flex-col w-60 , h-72 rounded-2xl '>
            <Image source={images.newYork} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='absolute size-full rounded-2xl' />
            <View className='bg-white/80 rounded-full flex flex-row items-center absolute top-5 right-5 px-2 p-1'>
                <Image source={icons.star} />
                <Text className='text-primary-300 font-rubikBold ml-2 text-xl'>
                    4.8
                </Text>
            </View>
            <View className='absolute bottom-5  px-5 flex flex-row justify-between w-full'>
                <View>
                    <Text className='text-white font-rubikBold text-2xl mb-2 '>
                        Merialla Villa
                    </Text>
                    <Text className='text-white font-rubikLight text-xl mb-2'>
                        New York, US
                    </Text>
                    <Text className='text-white font-rubikBold text-2xl'>
                        $12219
                    </Text>
                </View>
                <Image source={icons.heart} className='size-6 absolute bottom-0 right-5' />
            </View>

        </TouchableOpacity>
    );
}




export const Card = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='  flex flex-col w-1/2 px-3  py-4   shadow-sm shadow-black-100/45 relative bg-white rounded-2xl'>
            <Image source={images.japan} className='w-full h-40 rounded-lg' />
            <View className=' rounded-full flex flex-row items-center bg-white/80 absolute top-6 right-5 px-2 p-1'>
                <Image source={icons.star} />
                <Text className='text-primary-300 font-rubikBold ml-2 text-xl'>
                    4.8
                </Text>
            </View>
            <View className='  flex flex-col  '>
                <Text className='text-black-300 font-rubikBold text-2xl  '>
                    Merialla Villa
                </Text>
                <Text className='text-black-100 font-rubikLight text-xl '>
                    New York, US
                </Text>
                <View className=' flex flex-row items-center justify-between'>
                    <Text className='text-primary-300 font-rubikBold text-2xl'>
                        $12219
                    </Text>
                    <Image source={icons.heart} className='size-6' tintColor={"#8C8E98"} />
                </View>
            </View>

        </TouchableOpacity>
    );
}


