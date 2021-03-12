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
import axios from 'axios'

import InfoComponents from '../styles/InfoComponents.js';


class MyReviewsScreen extends React.Component{
  state = {
    reviews: [],
  }

  componentDidMount () {
    axios
      .get(`http://127.0.0.1:8000/profiles/${global.session_id}/`)
      .then(response =>  this.setState({reviews: response.data.reviews}))
      .catch(error => console.log(error)
    );
  }

  render() {
    console.log(this.state.reviews)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.reviews}
        renderItem={({item}) => (
          <TouchableOpacity style={InfoComponents.item} >
            <Text style={InfoComponents.title}>{item.business_name[0].name}</Text>
            <View
              style={{
              marginTop: 5,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              }}
            />
            <View style={{alignItems:'center', justifyContent: 'flex-end', padding: 10}}>
              <Stars
                display={parseFloat(item.rating)}
                spacing={8}
                count={5}
                starSize={50}
                fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
              /> 
            </View>
            <Text style={InfoComponents.detailsTwo}>"{item.description}"</Text>
            <Text style={InfoComponents.detailsOne}>Last Modified: {item.date}</Text>
          </TouchableOpacity>   
        )}
        keyExtractor={item => (item.id).toString()}
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

export default MyReviewsScreen;