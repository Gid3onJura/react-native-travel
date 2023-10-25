import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Platform, Linking } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { defaultHotelImage, defaultAttractionImage, defaultRestaurantImage, defaultRoadImage } from "../assets"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"

const ItemScreen = ({ route }) => {
  const navigation = useNavigation()

  const data = route?.params?.data
  const backpress = route?.params?.backpress

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const openMapUrl = (latCoordinate, lngCoordinate, title) => {
    const schema = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" })
    const latLng = `${latCoordinate},${lngCoordinate}`
    const label = title
    const url = Platform.select({
      ios: `${schema}${label}@${latLng}`,
      android: `${schema}${latLng}(${label})`,
    })

    Linking.openURL(url)
  }

  const imageUri = () => {
    if (data.images && data.images[2]) {
      return data.images[2]
    } else if (data.images[1]) {
      return data.images[1]
    } else if (data.images[1]) {
      return data.images[0]
    }
    if (data.entryType === "hotels") {
      return defaultHotelImage
    } else if (data.entryType === "restaurants") {
      return defaultRestaurantImage
    } else if (data.entryType === "attractions") {
      return defaultAttractionImage
    } else if (data.entryType === "locations") {
      return defaultRoadImage
    }
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-4">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Header Section - Image, Back-Navigation */}
        <View className="relative bg-white shadow-lg">
          <Image source={imageUri()} className="w-full h-72 object-cover rounded-2xl" />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate(backpress)}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 left-[73%] bottom-5 justify-between px-6">
            {/*
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[18px] font-bold text-gray-500">{data?.prizeLevel}</Text>
              </View>
            </View>
            */}
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
        {/* Icon View */}
        <View className="mr-2 ml-2 mt-4 flex-row items-center justify-between">
          {data?.prizeLevel && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="#d58574" />
              </View>
              <View>
                <Text className="text-[#515151]">Price Level</Text>
                <Text className="text-[#515151]">{data?.prizeLevel}</Text>
              </View>
            </View>
          )}

          {data?.datetime && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="date-range" size={24} color="#d58574" />
              </View>
              <View>
                <Text className="text-[#515151]">Day {data?.day}</Text>
                <Text className="text-[#515151]">{data?.datetime}</Text>
              </View>
            </View>
          )}
        </View>

        {/* Description View */}
        <View className="mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]">
          <Text>{data?.description}</Text>
        </View>

        {/* Other Details View */}
        {data?.coordinates.lat && data?.coordinates.lng && (
          <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
            <View className="items-center flex-row space-x-6">
              <Entypo name="compass" size={24} color="#428288" />
              <TouchableOpacity onPress={() => openMapUrl(data.coordinates.lat, data.coordinates.lng, data.title)}>
                <Text className="text-lg">
                  {data.coordinates.lat.toFixed(5)}, {data.coordinates.lng.toFixed(5)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen
