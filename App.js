import React, { createContext } from "react";
// import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Selection from "./screens/Selection";
import { Result } from "./screens/Result";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
