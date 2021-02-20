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

const reviews = [
    {
      id: '1',
      title: 'Review 1',
      date: '01/03/2021',
      rating: 5
    },
    {
      id: '2',
      title: 'Review 2',
      date: '01/06/2021',
      rating: 3
    },
    {
      id: '3',
      title: 'Review 3',
      date: '01/09/2021',
      rating: 1
    },
    {
      id: '4',
      title: 'Review 4',
      date: '01/27/2021',
      rating: 2
    },
    {
      id: '5',
      title: 'Review 5',
      date: '02/03/2021',
      rating: 4
    },
    {
      id: '6',
      title: 'Review 6',
      date: '02/04/2021',
      rating: 5
    },
    {
      id: '7',
      title: 'Review 7',
      date: '02/06/2021',
      rating: 2
    },
    {
      id: '8',
      title: 'Review 8',
      date: '01/08/2021',
      rating: 4
    },
    {
      id: '9',
      title: 'Review 9',
      date: '02/10/2021',
      rating: 4
    },
  ];
  

const MyReviewsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
            <TouchableOpacity style={InfoComponents.item} >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>Date: {item.date}</Text>
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
    fontWeight: "bold",
    alignSelf: 'flex-start'
  },
  details: {
     fontSize: 15, 
  }
})

export default MyReviewsScreen;