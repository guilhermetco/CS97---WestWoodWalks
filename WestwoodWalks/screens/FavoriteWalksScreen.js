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

const favoritewalks = [
    {
      id: '1',
      title: 'Walk 1',
      creator: 'username',
    },
    {
      id: '2',
      title: 'Walk 2',
      creator: 'username',
    },
    {
      id: '3',
      title: 'Walk 3',
      creator: 'username',
    },
    {
      id: '4',
      title: 'Walk 4',
      creator: 'username',
    },
    {
      id: '5',
      title: 'Walk 5',
      creator: 'username',
    },
    {
      id: '6',
      title: 'Walk 6',
      creator: 'username',
    },
    {
      id: '7',
      title: 'Walk 7',
      creator: 'username',
    },
    {
      id: '8',
      title: 'Walk 8',
      creator: 'username',
    },
    {
      id: '9',
      title: 'Walk 9',
      creator: 'username',
    },
  ];
  

class FavoriteWalksScreen extends React.Component {
  state= {

  }
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoritewalks}
        renderItem={({item}) => (
          <TouchableOpacity style={InfoComponents.item} 
              onPress={() => this.props.navigation.navigate('Map')}>
              <Text style={InfoComponents.title}>{item.title}</Text>
              <Text style={InfoComponents.details}>Made by: {item.creator}</Text>
          </TouchableOpacity>   
          )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E2E8',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

export default FavoriteWalksScreen;