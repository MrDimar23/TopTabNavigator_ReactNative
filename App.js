import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./screens/Home";
import ContactScreen from "./screens/Contact";
import ChatScreen from "./screens/Chat";

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{marginTop: 22}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


