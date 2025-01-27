import icons from '@/constants/icons';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params?.query);
    const debouncedSearch = useDebouncedCallback((text: string) => {
        router.setParams({ query: text });
    }, 500);

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    };
    return (
        <View className="flex flex-row  items-center justify-between mt-5 bg-gray-100 px-5   py-4 rounded-lg w-full ">
            <View className='flex flex-row  items-center '>
                <Image source={icons.search} className=" size-5 z-10  " resizeMode="contain" tintColor={"#8C8E98"} />
                <TextInput placeholder="Search something" placeholderTextColor="#8C8E98" value={search} onChangeText={handleSearch} className=" ml-2 text-sm font-rubik text-black-300 w-full " />
            </View>
            <TouchableOpacity className='absolute right-5'>
                <Image source={icons.filter} className=" size-5 z-10  " resizeMode="contain" tintColor={"#8C8E98"} />
            </TouchableOpacity>

        </View>
    );
}

export default Search;
