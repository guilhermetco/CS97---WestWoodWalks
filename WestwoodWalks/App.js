import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen.js"
import LoginScreen from "./screens/LoginScreen.js"
import SignupScreen from "./screens/SignupScreen.js"
import MyReviewsScreen from "./screens/MyReviewsScreen.js"
import MyWalksScreen from "./screens/MyWalksScreen.js"
import AccountInfoScreen from "./screens/AccountInfoScreen.js"
import TabBar from "./screens/BottomTab.js"
import SavedMapScreen from "./screens/SavedMapScreen.js"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

global.session_id;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen options={{headerShown: false}} name="Explore" component={TabBar} />
        <Stack.Screen name="My Reviews" component={MyReviewsScreen} />
        <Stack.Screen name="My Walks" component={MyWalksScreen} />
        <Stack.Screen name="Account Information" component={AccountInfoScreen} />
        <Stack.Screen name="Your Walk" component={SavedMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

