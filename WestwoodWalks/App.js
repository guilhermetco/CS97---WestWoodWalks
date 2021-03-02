import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './screens/BottomTab.js'
import HomeScreen from "./screens/HomeScreen.js"
import LoginScreen from "./screens/LoginScreen.js"
import SignupScreen from "./screens/SignupScreen.js"
import ProfileScreen from "./screens/ProfileScreen.js"
import MyReviewsScreen from "./screens/MyReviewsScreen.js"
import MyWalksScreen from "./screens/MyWalksScreen.js"
import FavoriteWalksScreen from "./screens/FavoriteWalksScreen.js"
import FavoritePlacesScreen from "./screens/FavoritePlacesScreen.js"
import AccountInfoScreen, {EditAccountInfo} from "./screens/AccountInfoScreen.js"
import PlaceDetailsScreen from "./screens/PlaceDetailsScreen.js"
import TabBar from "./screens/BottomTab.js"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Favorites() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Walks" component={FavoriteWalksScreen} />
      <Tab.Screen name="Places" component={FavoritePlacesScreen} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Explore" component={TabBar} />
        <Stack.Screen name="My Reviews" component={MyReviewsScreen} />
        <Stack.Screen name="My Walks" component={MyWalksScreen} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Account Information" component={AccountInfoScreen} />
        <Stack.Screen name="Edit Account" component={EditAccountInfo} />
        <Stack.Screen name="Place Details" component={PlaceDetailsScreen} />
        <Stack.Screen name= "TabBar" component={TabBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;