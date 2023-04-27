import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {MinusCircleIcon,PlusCircleIcon } from 'react-native-heroicons/solid'


export default function DishRow({id,name,description,price,image}) {

    const [isPressed,setIsPressed] = useState(false)

  return (
    <>
    <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed} && border-b-0`} onPress={()=>setIsPressed(!isPressed)}>
        <View className='flex-row'>
      <View className='flex-1 pr-2'> 
        
        <Text className='text-lg mb-1'>{name}</Text>
        <Text className='text-gray-400'>{description}</Text>
        <Text className='text-gray-400'>${price}.00</Text>
        
      </View>
      <View>
        <Image style={{borderWidth:1,borderColor:'#F3F3F4'}} source={{
            uri:image
        }} className='h-20 w-20 bg-gray-300 p-4' />
      </View>
      </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-white px-4 '>
            <View className='flex-row items-center space-x-2 pb-3 '>
            <TouchableOpacity>
            <MinusCircleIcon 
            // color={DataTransferItemList.length ? "#00CCBB" : "gray"}
            color="#00CCBB"
            size={40} />
            
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
            <PlusCircleIcon
            color="#00CCBB"
            // color={DataTransferItemList.length ? "#00CCBB" : "gray"}
            size={40} />
            
            </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}