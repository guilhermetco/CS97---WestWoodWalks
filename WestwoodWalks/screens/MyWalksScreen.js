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
      title: 'Walk 1',
      distance: '3 miles'
    },
    {
      id: '2',
      title: 'Walk 2',
      distance: '4 miles'
    },
    {
      id: '3',
      title: 'Walk 3',
      distance: '2 miles'
    },
    {
      id: '4',
      title: 'Walk 4',
      distance: '5 miles'
    },
    {
      id: '5',
      title: 'Walk 5',
      distance: '0.5 miles'
    },
    {
      id: '6',
      title: 'Walk 6',
      distance: '8 miles'
    },
    {
      id: '7',
      title: 'Walk 7',
      distance: '7 miles'
    },
    {
      id: '8',
      title: 'Walk 8',
      distance: '3 miles'
    },
    {
      id: '9',
      title: 'Walk 9',
      distance: '2 miles'
    },
  ];

const MyWalksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={walks}
        renderItem={({item}) => (
        <TouchableOpacity style={InfoComponents.item} >
            <Text style={InfoComponents.title}>{item.title}</Text>
            <Text style={InfoComponents.details}>Distance: {item.distance}</Text>
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
    justifyContent: 'center'
  }
})

export default MyWalksScreen;