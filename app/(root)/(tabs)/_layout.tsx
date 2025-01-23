import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import icons from '@/constants/icons';

const Tabslayout = () => {
    const TabBarIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
        <View className=' flex-1 mt-3 flex flex-col items-center justify-center'>
            <Image source={icon} resizeMode='contain' className='size-6' tintColor={focused ? "#0061FF" : "#666876"} />
            <Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center m-1 `}>{title}</Text>
        </View>
    )

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: "absolute",
                borderTopColor: "#0061FF0A",
                borderTopWidth: 1,
                minWidth: 70
            },
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon title='Home' icon={icons.home} focused={focused} />
                )
            }} />
            <Tabs.Screen name="explore" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon title='Explore' icon={icons.search} focused={focused} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon title='profile' icon={icons.person} focused={focused} />
                )
            }} />

        </Tabs>
    );
}

export default Tabslayout;
