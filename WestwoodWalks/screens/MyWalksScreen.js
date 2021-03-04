import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import InfoComponents from '../styles/InfoComponents.js';

const walks = [
    {
      id: '1',
      title: 'Grocery Run',
      distance: '3 miles',
      description: "Route to Trader Joes, Target, and Sprouts from dorms.",
      likes: 3,
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '2',
      title: 'Morning Run',
      distance: '3 miles',
      description: "Loop around UCLA campus.",
      likes: 4,
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '3',
      title: 'Scenic Evening Walk',
      distance: '2 miles',
      description: 'Walk around Sunset Blvd.',
      likes: 5,
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '4',
      title: 'To Powell',
      distance: '5 miles',
      description: '',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '5',
      title: 'Walk 5',
      distance: '0.5 miles',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '6',
      title: 'Walk 6',
      distance: '8 miles',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '7',
      title: 'Walk 7',
      distance: '7 miles',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '8',
      title: 'Walk 8',
      distance: '3 miles',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
    {
      id: '9',
      title: 'Walk 9',
      distance: '2 miles',
      start:
      {
        latitude: 34.06279,
        longitude: -118.44390,
      },
      end:
      {
        latitude: 34.06241,
        longitude: -118.44375,
      },
    },
  ];

const MyWalksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={walks}
        renderItem={({item}) => (
        <TouchableOpacity style={InfoComponents.item} 
            onPress={() => navigation.navigate('Map')}>
            <Text style={InfoComponents.title}>{item.title}</Text>
            <Text style={InfoComponents.detailsOne}>Distance: {item.distance}</Text>
            <Text style={InfoComponents.detailsTwo}>{item.description}</Text>
        </TouchableOpacity>   
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E2E8',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})

export default MyWalksScreen;