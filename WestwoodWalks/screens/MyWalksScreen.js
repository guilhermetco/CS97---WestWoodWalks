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
import axios from 'axios'
import { ThemeContext } from 'react-native-elements';

class MyWalksScreen extends React.Component{
  state = {
    walks: [],
  }

  componentDidMount () {
    axios
      .get(`http://127.0.0.1:8000/walks/?id=${global.session_id}`)
      .then(response =>  this.setState({walks: response.data.results}))
      .catch(error => console.log(error)
    );
  }

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={this.state.walks}
        renderItem={({item}) => (
        <TouchableOpacity style={InfoComponents.item} 
            onPress={() => this.props.navigation.navigate('Your Walk', {walk: item})}>
            <Text style={InfoComponents.title}>{item.name}</Text>
            <Text style={InfoComponents.detailsTwo}>{item.description}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})

export default MyWalksScreen;