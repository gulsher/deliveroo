import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

export default function FeaturedRow({id,title,description}) {

   const [restaurants, setRestaurants] = useState([])

   useEffect(()=>{
      client.fetch(`*[_type == "featured" && _id == $id ] {
         ...,
         restaurant[]->{
           ...,
           dishes[]->,
           type->{
            name
           }
         },
       }[0]
       `,{id}).then(data=>{
         setRestaurants(data?.restaurants)
       })
   },[])

  return (
    <View>
     <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className='font-bold text-lg' >{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
     </View>
     <Text className='text-xs text-gray-500 px-4'>{description}</Text>
     <ScrollView
     horizontal
     contentContainerStyle={{
        paddingHorizontal:15,
     }}
     showsHorizontalScrollIndicator={false}
     className='pt-4'
     >
        {/* Restaurant card */}
        <RestaurantCard 
        id={123} imgUrl="https://links.papareact.com/gn7" title="Yo Sush" rating={4.5} genre="Japeneee" address="123 Main St" short_description="this is test desc" dishes={[]} long={20} lat={0}
        />
					 <RestaurantCard 
        id={123} imgUrl="https://links.papareact.com/gn7" title="Yo Sush" rating={4.5} genre="Japeneee" address="123 Main St" short_description="this is test desc" dishes={[]} long={20} lat={0}
        />
				 <RestaurantCard 
        id={123} imgUrl="https://links.papareact.com/gn7" title="Yo Sush" rating={4.5} genre="Japeneee" address="123 Main St" short_description="this is test desc" dishes={[]} long={20} lat={0}
        />
				 <RestaurantCard 
        id={123} imgUrl="https://links.papareact.com/gn7" title="Yo Sush" rating={4.5} genre="Japeneee" address="123 Main St" short_description="this is test desc" dishes={[]} long={20} lat={0}
        />
     </ScrollView>
    </View>
  )
}