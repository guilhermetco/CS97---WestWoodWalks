import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import Buttons from '../styles/Buttons.js'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import InfoComponents from '../styles/InfoComponents.js';

// Not used currently
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