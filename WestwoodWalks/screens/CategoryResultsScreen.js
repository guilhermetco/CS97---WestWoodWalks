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
import Colors from '../styles/Colors.js'
import InfoComponents from '../styles/InfoComponents.js';


class CategoryResultsScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        places: props.route.params.places,
    }
  };
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.places}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={InfoComponents.item}
            onPress={() => this.props.navigation.navigate('Place Details', {place: item})}
          >
            <View style={{flexDirection: "row", alignItems:'flex-start', justifyContent: 'flex-start'}}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <Text style={InfoComponents.detailsOne}>{item.address}</Text>
            <Text style={{fontSize: 15, marginBottom: 15}}>{item.category}</Text>
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
              <Text style={InfoComponents.detailsOne}>{item.reviews.length} Reviews</Text>
            </View>
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
    backgroundColor: Colors.blue,
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

export default CategoryResultsScreen; 