import React from 'react';
import { useGlobalContext } from '@/lib/global-provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { Redirect, Slot } from 'expo-router';


export default function AppLayout() {

    const { loading, isLoggedIn } = useGlobalContext();
    if (loading) {
        return <SafeAreaView className=' bg-whiteflex justify-center items-center h-full'>
            <ActivityIndicator className=' text-purple-300 ' size={'large'} />
        </SafeAreaView>
    }
    if (!isLoggedIn) {
        return <Redirect href="/sign-in" />
    }

    return <Slot />
}

