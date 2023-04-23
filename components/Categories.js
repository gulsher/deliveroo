import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}>
        {/* category card */}
        <CategoryCard  imgUrl="https://links.papareact.com/wru"  title="testing" />
        <CategoryCard  imgUrl="https://links.papareact.com/wru" title="testing" />
        <CategoryCard  imgUrl="https://links.papareact.com/wru" title="testing" />

      <Text>Categories</Text>
    </ScrollView>
  )
}