import images from '@/constants/images';
import React from 'react';
import { View, Text, Image } from 'react-native';

const EmptyPage = () => {
    return (
        <View className='flex justify-center items-center my-5'>
            <Image source={images.empty} className='size-64' />
            <Text className='text-black-300 font-rubikBold text-xl mt-5'>
                No Data Found</Text>
            <Text className='mt-5 text-black-100 font-rubikLight text-lg text-center'>
                We could not find any data
            </Text>

        </View>
    );
}

export default EmptyPage;
