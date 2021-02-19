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
      title: 'Like 1',
    },
    {
      id: '2',
      title: 'Like 2',
    },
    {
      id: '3',
      title: 'Like 3',
    },
    {
      id: '4',
      title: 'Like 4',
    },
    {
      id: '5',
      title: 'Like 5',
    },
    {
      id: '6',
      title: 'Like 6',
    },
    {
      id: '7',
      title: 'Like 7',
    },
    {
      id: '8',
      title: 'Like 8',
    },
    {
      id: '9',
      title: 'Like 9',
    },
  ];
  
  const Item = ({ title }) => (
    <TouchableOpacity style={InfoComponents.item} >
        <Text>{title}</Text>
    </TouchableOpacity>
  );

const FavoritesScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={walks}
        renderItem={renderItem}
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

export default FavoritesScreen;