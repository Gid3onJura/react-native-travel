import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native"
import React, { useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Avatar, Hotels, Restaurants, Attractions, NotFound } from "../assets"
import MenuContainer from "../components/MenuContainer"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ItemCardContainer from "../components/ItemCardContainer"
//import CustomSearchBar from "../components/CustomSearchBar"

export default function DiscoverScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const [type, setType] = useState("hotels")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View>
      </View>

      {/** Menu Container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0b646b" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer key={"hotels"} title="Hotels" imageSrc={Hotels} type={type} setType={setType} />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2c7379] text-[28px] font-bold">History</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#a0c4c7] text-[20px] font-bold">Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#a0c4c7" />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={"https://cdn.pixabay.com/photo/2020/03/31/11/59/sunrise-4987384_960_720.jpg"}
                    title="Something"
                    location="Slowenien"
                  />
                  <ItemCardContainer
                    key={"102"}
                    imageSrc={"https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg"}
                    title="Sample"
                    location="Slowenien"
                  />
                </>
              ) : (
                <>
                  <View className="w-full h-[300px] items-center justify-center space-y-8">
                    <Image source={NotFound} className="w-32 h-32 object-cover" />
                    <Text className="text-2xl text-[#428288] font-semibold">Opps...No Data found</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}
