import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItem } from '../features/baksetSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItem)
    const dispatch = useDispatch()
    const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([])
    useMemo(()=>{
        const groupedItems = items.reduce((results,item)=>{
            (results[item.id] = results[item.id] || []).push(item)
        },{});
        setGroupedItemsInBasket(groupedItems)
    },[])

  return (
    <SafeAreaView>
      <View>
        <View>
            <View>
                <Text className='text-lg font-bold text-center'>Basket</Text>
                <Text className='font-bold text-center text-gray-400'>{restaurant.title}</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}