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

const favoriteplaces = [
    {
      id: '1',
      title: 'Place 1',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '2',
      title: 'Place 2',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '3',
      title: 'Place 3',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '4',
      title: 'Place 4',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '5',
      title: 'Place 5',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '6',
      title: 'Place 6',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '7',
      title: 'Place 7',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '8',
      title: 'Place 8',
      address: '123 street ave, Los Angeles'
    },
    {
      id: '9',
      title: 'Place 9',
      address: '123 street ave, Los Angeles'
    },
  ];
  

const FavoritePlacesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteplaces}
        renderItem={({item}) => (
          <TouchableOpacity style={InfoComponents.item} >
              <Text style={InfoComponents.title}>{item.title}</Text>
              <Text style={InfoComponents.details}>{item.address}</Text>
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

export default FavoritePlacesScreen;