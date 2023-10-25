import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  ActivityIndicator,
} from "react-native"
import React, { useLayoutEffect, useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { defaultHotelImage, defaultAttractionImage, defaultRestaurantImage, defaultRoadImage } from "../assets"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import { getAllPlaces } from "../api"
import ItemCardContainer from "./ItemCardContainer"
import { NotFound } from "../assets"
import uuid from "react-native-uuid"
import CustomSearchBar from "./CustomSearchBar"

const ExploreScreen = () => {
  const navigation = useNavigation()
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
    getAllPlaces().then((data) => {
      setMainData(data)
      setInterval(() => {
        setIsLoading(false)
      }, 1000)
    })
  }, [])

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
    <SafeAreaView className="flex-1 bg-white relative mt-4">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <View className="flex-row inset-x-0 justify-between px-2">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View>
          <CustomSearchBar placeholder={"Suche"} onChangeText={onChangeSearch} value={searchQuery} />
        </View>

        <View className="mb-8">
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2c7379] text-[28px] font-bold">Diary</Text>
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
                      imageSrc={data?.images && data?.images[0] ? data?.images[0] : getDefaultImage(data.entryType)}
                      title={data?.title ? data?.title : ""}
                      location={data?.location ? data?.location : null}
                      data={data}
                      backpress={"ExploreScreen"}
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

export default ExploreScreen
