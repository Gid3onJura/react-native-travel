import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DiscoverScreen from "./screens/Discover"
import HomeScreen from "./screens/HomeScreen"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ItemScreen from "./components/ItemScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
