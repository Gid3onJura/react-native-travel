import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HeroImage } from "../assets"
import * as Animatable from "react-native-animatable"
import Entypo from "react-native-vector-icons/Entypo"

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-[#00bcc9] flex-1 relative">
      <Image source={HeroImage} className="absolute mt-11 w-full h-full object-contain" />

      {/** First Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Entdecke schöne Momente in</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">Slowenien</Text>
        <Text className="text-[#3c6072] text-base mb-16">Ein kleiner Reisebericht</Text>
      </View>

      {/** Second Section */}
      <View className="flex-1 relative items-center justify-center">
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
            <View className="pl-2">
              <Entypo name="controller-play" size={50} color="#3c6072" />
            </View>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
