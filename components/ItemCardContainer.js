import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation } from "@react-navigation/native"

const ItemCardContainer = ({ imageSrc, title, location, data, backpress }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { data: data, backpress: backpress })}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[170px] my-2"
    >
      <Image
        source={typeof imageSrc === "string" ? { uri: imageSrc } : imageSrc}
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title.length > 12 ? `${title.slice(0, 12)}..` : title}{" "}
        {backpress != "Discover" ? <Text>({data.day})</Text> : ""}
      </Text>
      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={20} color="#8597a2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location.length > 15 ? `${location.slice(0, 15)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCardContainer
