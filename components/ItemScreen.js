import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { defaultHotelImage, defaultAttractionImage, defaultRestaurantImage } from "../assets"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const ItemScreen = ({ route }) => {
  const navigation = useNavigation()

  const data = route?.params?.data

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const imageUri = () => {
    if (data.entryType === "hotels") {
      return defaultHotelImage
    } else if (data.entryType === "restaurants") {
      return defaultRestaurantImage
    } else if (data.entryType === "attractions") {
      return defaultAttractionImage
    }
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Header Section - Image, Back-Navigation */}
        <View className="relative bg-white shadow-lg">
          <Image source={imageUri()} className="w-full h-72 object-cover rounded-2xl" />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 left-[73%] bottom-5 justify-between px-6">
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[18px] font-bold text-gray-500">{data?.prizeLevel}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Item Details */}
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">{data?.title}</Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9Ea6" />
            <Text className="text-[#8c9ea6] text-[20px] font-bold">{data?.location}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen
