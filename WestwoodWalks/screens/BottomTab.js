import React from 'react';
import HomeScreen from "./HomeScreen.js"
import LoginScreen from "./LoginScreen.js"
import SignupScreen from "./SignupScreen.js"
import MapScreen from "./MapScreen.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native';
import ReviewScreen from './ReviewScreen.js'


const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Review" component={ReviewScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
  );
}