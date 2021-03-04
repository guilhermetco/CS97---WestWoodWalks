import React from 'react';
import HomeScreen from "./HomeScreen.js"
import LoginScreen from "./LoginScreen.js"
import SignupScreen from "./SignupScreen.js"
import MapScreen from "./MapScreen.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native';
import ReviewScreen from './ReviewScreen.js'
import ProfileScreen from  './ProfileScreen.js'


const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Reviews" component={ReviewScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}