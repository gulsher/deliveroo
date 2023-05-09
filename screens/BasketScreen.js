import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItem, selectBasketTotal } from '../features/baksetSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItem)
    const toatlBaseket = useSelector(selectBasketTotal)
    const dispatch = useDispatch()
    const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([])
    useMemo(()=>{
        const groupedItems = items.reduce((results,item)=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{});
        setGroupedItemsInBasket(groupedItems)
    },[items])
    
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-center'>Basket</Text>
                <Text className='font-bold text-center text-gray-400'>{restaurant.title}</Text>
            </View>
            <TouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray-100 absolute right-5 top-4' >
                <XCircleIcon color='#00CCBB' height={50} width={50} />
            </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image className='h-7 w-7 bg-gray-300 p-4 rounded-full' source={{
                uri:'https://links.papareact.com/wru'
            }} />
            <Text className='flex-1'>Delivering in 30-35 Mins</Text>
            <TouchableOpacity>
                <Text className='text-[#00CCBB]'>Change</Text>
            </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key,items])=>(
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#00CCBB]'>{items.length} x</Text>
                    <Image source={{uri:items[0]?.image}} className='h-12 w-12 rounded-full' />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    <Text className='text-gray-600'>$ {items[0]?.price}</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB] text-xs' onPress={()=>dispatch(removeFromBasket({id:key}))} >Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>SubTotal</Text>
                <Text className='text-gray-400' >$ {toatlBaseket}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Fee</Text>
                <Text className='text-gray-400' >$5.99</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text>Order Total</Text>
                <Text className='font-extrabold' >${toatlBaseket + 5.99}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('PreparingOrderScreen')} className='rounded-lg bg-[#00CCBB] p-4'>
                <Text className='text-center text-white text-xl font-bold'>Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}