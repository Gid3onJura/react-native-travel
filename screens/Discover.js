import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import uuid from "react-native-uuid"
import {
  Avatar,
  Hotels,
  Restaurants,
  Attractions,
  NotFound,
  Road,
  defaultHotelImage,
  defaultAttractionImage,
  defaultRestaurantImage,
  defaultRoadImage,
} from "../assets"
import MenuContainer from "../components/MenuContainer"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ItemCardContainer from "../components/ItemCardContainer"
import { getPlacesData } from "../api"
import CustomSearchBar from "../components/CustomSearchBar"
//import CustomSearchBar from "../components/CustomSearchBar"

export default function DiscoverScreen() {
  const navigation = useNavigation()
  const [type, setType] = useState("attractions")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(searchQuery, type).then((data) => {
      setMainData(data)
      setInterval(() => {
        setIsLoading(false)
      }, 1000)
    })
  }, [searchQuery, type])

  const onChangeSearch = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  const getDefaultImage = (type) => {
    if (type == "hotels") {
      return defaultHotelImage
    }
    if (type == "attractions") {
      return defaultAttractionImage
    }
    if (type == "restaurants") {
      return defaultRestaurantImage
    }
    if (type == "locations") {
      return defaultRoadImage
    }
  }

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
        </View>

        {/* <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View> */}
      </View>

      {/* Search Bar */}
      <View>
        <CustomSearchBar placeholder={"Suche"} onChangeText={onChangeSearch} value={searchQuery} />
      </View>

      {/** Menu Container */}
      <ScrollView>
        <View className="flex-row px-8 mt-8">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <MenuContainer key={"locations"} title="Locations" imageSrc={Road} type={type} setType={setType} />
          </ScrollView>
        </View>

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2c7379] text-[28px] font-bold">Tips</Text>
            <TouchableOpacity
              className="flex-row items-center justify-center space-x-2"
              onPress={() => navigation.navigate("ExploreScreen")}
            >
              <Text className="text-[#a0c4c7] text-[20px] font-bold">Diary</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#a0c4c7" />
            </TouchableOpacity>
          </View>

          {isLoading ? (
            <View className="flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0b646b" />
            </View>
          ) : (
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={uuid.v4()}
                      imageSrc={data?.images && data?.images[0] ? data?.images[0] : getDefaultImage(data?.entryType)}
                      title={data?.title ? data?.title : ""}
                      location={data?.location ? data?.location : null}
                      data={data}
                      backpress={"Discover"}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[300px] items-center justify-center space-y-8">
                    <Image source={NotFound} className="w-10 h-10 object-cover" />
                    <Text className="text-1xl text-[#428288] font-semibold">Opps...No Data found</Text>
                  </View>
                </>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
