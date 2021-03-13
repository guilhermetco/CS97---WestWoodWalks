import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import InfoComponents from '../styles/InfoComponents.js';

// Not used currently
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