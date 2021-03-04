import React from 'react';
import { Component, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image, KeyboardAvoidingView, } from 'react-native';
import 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { or } from 'react-native-reanimated';
import { TextInput } from 'react-native';
import Colors from '../styles/Colors.js'
import { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Buttons from '../styles/Buttons.js'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import InfoComponents from '../styles/InfoComponents'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var items = [
    {id:'1',
    name: 'In-N-Out',
    address: '123 street ave, Los Angeles',
    type: 'Restaurant',
    rating: 4.5,
    numberofreviews: 10,},
    {id:'2',
    name: 'Target',
    address: '123 street ave, Los Angeles',
    type: 'Lecture Hall',
    rating: 3.2,
    numberofreviews: 4,},
    {id:'3',
    name: "Trader Joe's",
    address: '123 street ave, Los Angeles',
    type: 'Library',
    rating: 4.8,
    numberofreviews: 30,},
    {id:'4',
    name: "Whole Foods",
    address: '123 street ave, Los Angeles',
    type: 'Park',
    rating: 3.5,
    numberofreviews: 15,},
]

class ReviewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    render () {
        return (
            <View style={styles.container}>
              <SearchableDropdown
                multi={true}
                onItemSelect={(item) => {
                this.setState({ selectedItems: items });
              }}
              containerStyle={{ padding: '3%', marginTop: '15%', backgroundColor: Colors.lightyellow, borderWidth: '1', borderColor: Colors.brown}}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: 'white',
                borderColor: Colors.brown,
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              items={items}
              defaultIndex={2}
              resetValue={false}
              textInputProps={
                {
                  placeholder: "Search for a Place or Event",
                  onTextChange: text => alert(text)
                }
              }
              listProps={
                {
                  nestedScrollEnabled: true,
                }
              }
            />
            <View style={{height: '30%', marginTop: '15%'}}>
              <Text style={styles.title}>Search by Category</Text>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <Ionicons name="restaurant" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Restaurants</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <MaterialIcons name="local-grocery-store" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Groceries</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <MaterialIcons name="park" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Parks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <Text style={styles.categories}>Shopping</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <FontAwesome name="coffee" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Cafe</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <Text style={styles.categories}>Shop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <Text style={styles.categories}>Parks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}>
                    <Text style={styles.categories}>Food</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{height: '40%', marginTop: '5%'}}>
              <Text style={styles.title}>Discover</Text>
              <SafeAreaView>
                <FlatList 
                  data={items }
                  renderItem={({item}) => (
                  <TouchableOpacity style={styles.item} 
                    onPress={() => this.props.navigation.navigate('Place Details')}>
                    <Text style={styles.name}>{item.name}</Text>
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
            </View> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECC6',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  title: {
    alignSelf: 'center',
    fontSize: 17,
    color: Colors.brown,
    fontWeight: '500',
    padding: '2%'
  },
  categories: {
    fontSize: 12,
    color: Colors.brown
  },
  item: {
    backgroundColor: Colors.lightyellow,
    padding: '2%',
    marginVertical: '2%',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
    color: Colors.brown,
    fontWeight: '500',
  }
})

export default ReviewScreen;