import { categories } from '@/constants/data';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const Filters = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selected, setSelected] = useState(params?.filter || "All");

    const handleChangeCategory = (category: string) => {
        if (category === selected) {
            setSelected("All");
            router.setParams({ filter: "All" });
            return;
        }
        setSelected(category);
        router.setParams({ filter: category });

    }
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerClassName='pr-0 mt-4'>
            {categories.map((item, index) => (
                < TouchableOpacity key={index} onPress={() => handleChangeCategory(item.category)} className={`px-4 mr-5 py-2 rounded-full border border-primary-200 ${selected === item.category ? 'bg-primary-300' : 'bg-primary-100'}`}>
                    <Text className={`${selected === item.category ? 'text-white' : 'text-black-300'} font-rubiklight text-md`}>{item.title}</Text></TouchableOpacity>

            ))}
        </ScrollView>
    );
}

export default Filters;
