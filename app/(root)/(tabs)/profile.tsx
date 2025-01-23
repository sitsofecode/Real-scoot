import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'


interface SettingItemProps { icon: ImageSourcePropType, title: string, onPress: () => void, showArrow: boolean, textStyle: string }
const FirstDivSettitngItems = [
  {
    icon: icons.calendar,
    title: 'My Booking',
    onPress: () => console.log('My Booking')
  },
  {
    icon: icons.wallet,
    title: 'Payements',
    onPress: () => console.log('Payements')
  },

]
const secondDivSettitngItems = [
  {
    icon: icons.person,
    title: 'Profile',
    onPress: () => console.log('Profile')
  },
  {
    icon: icons.bell,
    title: 'Notification',
    onPress: () => console.log('Notification')
  },
  {
    icon: icons.shield,
    title: 'Security',
    onPress: () => console.log('Security')
  },
  {
    icon: icons.language,
    title: 'Language',
    onPress: () => console.log('Language')
  },
  {
    icon: icons.info,
    title: 'Help Center',
    onPress: () => console.log('Help')
  },
  {
    icon: icons.people,
    title: 'Invite Friends',
    onPress: () => console.log('Language')
  }
]
const SettingItem = ({ icon, title, onPress, showArrow = true, textStyle }: SettingItemProps) => (
  <TouchableOpacity className='flex flex-row items-center justify-between mt-5' onPress={onPress} >
    <View className='flex flex-row items-center gap-3 '>
      <Image source={icon} className='size-6' />
      <Text className={` text-lg  font-rubikMedium text-black-300 ${textStyle}`}>{title}</Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className='size-6' />}
  </TouchableOpacity>
)

const Profile = () => {
  const { user, refetch } = useGlobalContext()
  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result) {
        Alert.alert('Logout Success', 'You have been logged out successfully');
        refetch({});
      } else {
        Alert.alert('Logout error', 'An error occured while logging out')
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <SafeAreaView className='h-full bg-white  '>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7'>
        <View className='flex flex-row items-center justify-between mt-5 '>
          <Text className='text-xl font-rubikBold '>Profile</Text>
          <Image source={icons.bell} resizeMode='contain' className='size-6' />
        </View>
        <View className='flex flex-col items-center justify-between mt-5 '>
          <View className='flex  flex-col  relative items-center justify-center'>
            <Image source={{ uri: user?.avatar }} className='size-40 rounded-full' />
            <TouchableOpacity className='absolute  bottom-11 right-2'>
              <Image source={icons.edit} resizeMode='contain' className='size-9  ' />
            </TouchableOpacity>
            <Text className='text-2xl font-rubikBold mt-5'>
              {user?.name}
            </Text>
          </View>
        </View>
        <View className='flex flex-col  justify-between mt-8 border-t  border-t-primary-200'>
          {FirstDivSettitngItems.map((item, index) => (
            <View key={index}>
              <SettingItem icon={item.icon} title={item.title} onPress={item.onPress} textStyle='' showArrow />
            </View>
          )
          )}
        </View>
        <View className='flex flex-col  justify-between mt-8 border-t  border-t-primary-200'>
          {secondDivSettitngItems.map((item, index) => (
            <View key={index}>
              <SettingItem icon={item.icon} title={item.title} onPress={item.onPress} textStyle='' showArrow />
            </View>
          )
          )}
          <SettingItem icon={icons.logout} title="Logout" onPress={handleLogout} textStyle='text-danger' showArrow={false} />
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default Profile