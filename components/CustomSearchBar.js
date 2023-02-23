import React from "react"
import { View, TextInput, Text } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { Searchbar } from "react-native-paper"

export default function CustomSearchBar({ placeholder, onChangeText, value }) {
  return (
    <View className="flex-row bg-[#d9dbda] rounded-xl mx-4 items-center py-1 px-4 shadow-lg my-3">
      <Searchbar placeholder={placeholder} onChangeText={onChangeText} value={value} />
    </View>
  )
}

/**
    <View className="mt-4 p-3 flex-row bg-[#d9dbda] rounded-3xl items-center">
      <Feather name="search" size={20} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
      <TextInput style={{ fontSize: 15 }} placeholder="Search" />
    </View>
  */
