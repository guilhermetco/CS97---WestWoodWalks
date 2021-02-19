import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen.js"
import LoginScreen from "./screens/LoginScreen.js"
import SignupScreen from "./screens/SignupScreen.js"
import ProfileScreen from "./screens/ProfileScreen.js"
import MyReviewsScreen from "./screens/MyReviewsScreen.js"
import MyWalksScreen from "./screens/MyWalksScreen.js"
import FavoritesScreen from "./screens/FavoritesScreen.js"
import AccountInfoScreen from "./screens/AccountInfoScreen.js"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="My Reviews" component={MyReviewsScreen} />
        <Stack.Screen name="My Walks" component={MyWalksScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Account Information" component={AccountInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
