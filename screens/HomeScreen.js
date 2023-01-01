import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HeroImage } from "../assets"
import * as Animatable from "react-native-animatable"

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/** First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/** Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">Good moments</Text>
        <Text className="text-[#3c6072] text-base mb-16">
          Duis exercitation consequat Lorem dolore culpa. Minim nulla nisi consequat id Lorem eiusmod
        </Text>
      </View>

      {/** Third Section */}
      <View className="w-[300px] h-[300px] bg-[#00bcc9] rounded-full absolute bottom-[120px] -right-[120px]"></View>
      <View className="w-[300px] h-[300px] bg-[#e99265] rounded-full absolute -bottom-[100px] -left-[70px]"></View>
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-[500px] object-cover"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Discover")
          }}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] items-center justify-center rounded-full"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
