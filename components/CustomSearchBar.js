import React from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import { SearchBar } from "react-native-elements"

export default function CustomSearchBar({ placeholder, onChangeText, value, clearText }) {
  return (
    /**
    <View className="mx-4 mt-4 p-3 flex-row bg-[#d9dbda] rounded-3xl items-center">
      <Searchbar placeholder={placeholder} onChangeText={onChangeText} value={value} />
    </View>
     */

    /*
    <View className="mx-4 mt-4 p-3 flex-row bg-[#d9dbda] rounded-3xl items-center">
      <Feather name="search" size={20} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
      <TextInput style={{ fontSize: 15 }} placeholder={placeholder} onChangeText={onChangeText} value={value} />
      <View className="absolute right-2 rounded-full bg-[#979797] w-5 h-5 items-center justify-center">
        <TouchableOpacity onPress={clearText}>
          <Entypo name="cross" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    */
    <SearchBar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      containerStyle={{
        backgroundColor: "white",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: "#d9dbda",
      }}
      inputStyle={{
        color: "#000000",
      }}
      round={true}
    />
  )
}
