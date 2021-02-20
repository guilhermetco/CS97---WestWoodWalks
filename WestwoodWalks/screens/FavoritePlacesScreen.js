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

const favorites = [
    {
      id: '1',
      title: 'Place 1',
    },
    {
      id: '2',
      title: 'Place 2',
    },
    {
      id: '3',
      title: 'Place 3',
    },
    {
      id: '4',
      title: 'Place 4',
    },
    {
      id: '5',
      title: 'Place 5',
    },
    {
      id: '6',
      title: 'Place 6',
    },
    {
      id: '7',
      title: 'Place 7',
    },
    {
      id: '8',
      title: 'Place 8',
    },
    {
      id: '9',
      title: 'Place 9',
    },
  ];
  

const FavoritePlacesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => (
          <TouchableOpacity style={InfoComponents.item} >
              <Text style={styles.title}>{item.title}</Text>
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
  },
  title: {
    fontSize: 32,
  }
})

export default FavoritePlacesScreen;