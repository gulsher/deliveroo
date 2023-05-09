import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import {XCircleIcon} from 'react-native-heroicons/outline'
import * as Progres from 'react-native-progress'
import MapView , {Marker} from 'react-native-maps'

export default function DeliveryScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
                <XCircleIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className='font-light text-white text-lg'>Order Help</Text>

        </View>
        <View className='bg-white mx-5 my-0 rounded-md p-6 z-50 shadow-md'>
            <View className='flex-row justify-between'>
            <View>
                <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                <Text className='text-4xl font-bold'>30-35 Minutes</Text>

            </View>
            <Image source={{uri:'https://links.papareact.com/fls'}} className='h-20 w-20' />
            </View>
            <Progres.Bar size={30} color="#00CCBB" indeterminate={true} />
            <Text className='mt-3 text-gray-500'>
                Your oder at {restaurant.title} is being prepared
            </Text>
        </View>
      </SafeAreaView>
        <MapView
        initialRegion={{
            latitude:12.972442,
            longitude:77.580643,
            latitudeDelta: 0.005,
            longitudeDelta:0.005
        }}
        className='flex-1 mt-10 z-0'
        mapType='muteStandard'
        >
        <Marker 
        coordinate={{
            latitude:12.972442,
            longitude:77.580643,
        }}
        title={restaurant.title}
        description={restaurant.short_description}
        identifier='origin'
        pinColor='#00CCBB'
        />
        </MapView>
        <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
            <Image source={{uri:'https://links.papareact.com/wru'}}  className='h-12 w-12 bg-gray-300 rounded-full ml-5'/>
            <View className='flex-1'>
                <Text className='text-lg'>Gulsher Ahmed</Text>
                <Text className='text-gray-400'>Your Rider</Text>

            </View>
            <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
        </SafeAreaView>
    </View>
  )
}