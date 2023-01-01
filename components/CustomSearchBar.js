import React from "react"
import { View, TextInput, Text } from "react-native"
import Feather from "react-native-vector-icons/Feather"
//import { Searchbar } from "react-native-paper"

export default function CustomSearchBar({ placeholder, onChangeText, value }) {
  return <Searchbar placeholder={placeholder} onChangeText={onChangeText} value={value} />
}

/**
    <View className="mt-4 p-3 flex-row bg-[#d9dbda] rounded-3xl items-center">
      <Feather name="search" size={20} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
      <TextInput style={{ fontSize: 15 }} placeholder="Search" />
    </View>
  */
