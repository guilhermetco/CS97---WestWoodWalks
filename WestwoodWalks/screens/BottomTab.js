import React from 'react';
import MapScreen from "./MapScreen.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import ReviewScreen from './ReviewScreen.js'
import ProfileScreen from  './ProfileScreen.js'
import PlaceDetailsScreen from "./PlaceDetailsScreen.js"
import PlaceDirectionsScreen from "./PlaceDirectionsScreen.js"
import MakeReview from "./MakeReview.js"
import CategoryResultsScreen from "./CategoryResultsScreen"

// Navigation routes for app

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ReviewsRoute() {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Reviews" component={ReviewScreen} />
      <Stack.Screen name="Results" component={CategoryResultsScreen} />
      <Stack.Screen name="Place Details" component={PlaceDetailsScreen} />
      <Stack.Screen name="Directions" component={PlaceDirectionsScreen} />
      <Stack.Screen name="Write Review" component={MakeReview}/>
    </Stack.Navigator>
  )
}


export default function TabBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Reviews" component={ReviewsRoute} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}