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
      title: 'Review 1',
    },
    {
      id: '2',
      title: 'Review 2',
    },
    {
      id: '3',
      title: 'Review 3',
    },
    {
      id: '4',
      title: 'Review 4',
    },
    {
      id: '5',
      title: 'Review 5',
    },
    {
      id: '6',
      title: 'Review 6',
    },
    {
      id: '7',
      title: 'Review 7',
    },
    {
      id: '8',
      title: 'Review 8',
    },
    {
      id: '9',
      title: 'Review 9',
    },
  ];
  
  const Item = ({ title }) => (
    <TouchableOpacity style={InfoComponents.item} >
        <Text>{title}</Text>
    </TouchableOpacity>
  );

const MyReviewsScreen = ({ navigation }) => {
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

export default MyReviewsScreen;