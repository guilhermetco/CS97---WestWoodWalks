import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';

import InfoComponents from '../styles/InfoComponents.js';

const favoriteplaces = [
    {
      id: '1',
      title: 'Place 1',
      address: '123 street ave, Los Angeles',
      type: 'Restaurant',
      rating: 4.5,
      numberofreviews: 10,
    },
    {
      id: '2',
      title: 'Place 2',
      address: '123 street ave, Los Angeles',
      type: 'Lecture Hall',
      rating: 3.2,
      numberofreviews: 4,
    },
    {
      id: '3',
      title: 'Place 3',
      address: '123 street ave, Los Angeles',
      type: 'Library',
      rating: 4.8,
      numberofreviews: 30,
    },
    {
      id: '4',
      title: 'Place 4',
      address: '123 street ave, Los Angeles',
      type: 'Park',
      rating: 3.5,
      numberofreviews: 15,
    },
    {
      id: '5',
      title: 'Place 5',
      address: '123 street ave, Los Angeles',
      rating: 4,
      numberofreviews: 10,
    },
    {
      id: '6',
      title: 'Place 6',
      address: '123 street ave, Los Angeles',
      rating: 4,
      numberofreviews: 10,
    },
    {
      id: '7',
      title: 'Place 7',
      address: '123 street ave, Los Angeles',
      rating: 4,
      numberofreviews: 10,
    },
    {
      id: '8',
      title: 'Place 8',
      address: '123 street ave, Los Angeles',
      rating: 4,
      numberofreviews: 10,
    },
    {
      id: '9',
      title: 'Place 9',
      address: '123 street ave, Los Angeles',
      rating: 4,
      numberofreviews: 10,
    },
  ];

class FavoritePlacesScreen extends React.Component{
  state = {
    
  }
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteplaces}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={InfoComponents.item}
            onPress={() => this.props.navigation.navigate('Place Details')}
          >
            <View style={{flexDirection: "row", alignItems:'flex-start', justifyContent: 'flex-start'}}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={InfoComponents.detailsOne}>{item.address}</Text>
            <Text style={{fontSize: 15, marginBottom: 15}}>{item.type}</Text>
            <View style={{flexDirection: "row", backgroundColor: 'white', padding: 2}} >
              <View style={{alignItems:'flex-start', justifyContent: 'flex-start'}}>
                <Stars
                  display={item.rating}
                  spacing={0}
                  count={5}
                  starSize={50}
                  fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                  emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                  halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
                /> 
              </View>
              <Text style={InfoComponents.detailsOne}>{item.numberofreviews} Reviews</Text>
            </View>
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
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'flex-start',
    width: '90%',
  }
})

export default FavoritePlacesScreen; 