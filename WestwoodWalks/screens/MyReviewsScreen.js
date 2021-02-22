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

import InfoComponents from '../styles/InfoComponents.js';

const reviews = [
    {
      id: '1',
      title: 'BJs Restaurant',
      address: '123 street ave, Los Angeles',
      date: '01/03/2021',
      rating: 4.5,
      summary: "I LOVED this place! The food was impeccable and the service was amazing. I highly recommend dining here if you get the chance."
    },
    {
      id: '2',
      title: 'Starbucks',
      address: '123 street ave, Los Angeles',
      date: '01/06/2021',
      rating: 3,
      summary: "Not the best coffee out there, but if you are in a rush this is an okay option."
    },
    {
      id: '3',
      title: 'Boelter Hall',
      address: '123 street ave, Los Angeles',
      date: '01/09/2021',
      rating: 1,
      summary: "most confusing building ever. avoid."
    },
    {
      id: '4',
      title: 'reallyyyyyyyyyy longgggggggggggggggg nameeeeeeeee',
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
            <Text style={InfoComponents.title}>{item.title}</Text>
            <Text style={InfoComponents.detailsOne}>{item.address}</Text>
            <View
              style={{
              marginTop: 5,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              }}
            />
            <View style={{alignItems:'center', justifyContent: 'flex-end', padding: 10}}>
              <Stars
                display={item.rating}
                spacing={8}
                count={5}
                starSize={50}
                fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
              /> 
            </View>
            <Text style={InfoComponents.detailsTwo}>"{item.summary}"</Text>
            <Text style={InfoComponents.detailsOne}>Last Modified: {item.date}</Text>
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
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

export default MyReviewsScreen;