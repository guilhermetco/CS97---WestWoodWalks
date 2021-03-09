import React from 'react';
import { Component, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Integer, FlatList, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image, KeyboardAvoidingView, } from 'react-native';
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
import { SearchBar } from 'react-native-elements';
import axios from 'axios';


class ReviewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          items: []
        }
    };

componentDidMount () {
  axios
    .get("http://127.0.0.1:8000/business")
    .then(response => this.setState({items: response.data}))
    //.then(response => console.log(response.data))
    .then(response => console.log(this.state.items[20]))
    .catch(error => console.log(error)
    );
}

    render () {
      console.log(React.version);
        return (
            <View style={styles.container}>
              <SearchableDropdown
              multi={true}
              onItemSelect={(item) => this.props.navigation.navigate('Place Details', {place: item})}
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
              items={this.state.items}
              resetValue={false}
              textInputProps={
                {
                  placeholder: "Search for a Place or Event",
                }
              }
              listProps={
                {
                  nestedScrollEnabled: true,
                }
              }
            />
            <View style={{height: '30%', marginTop: '10%'}}>
              <Text style={styles.title}>Search by Category</Text>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.props.navigation.navigate('Results')}>
                    <Ionicons name="restaurant" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Restaurants</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.props.navigation.navigate('Results')}>
                    <MaterialIcons name="local-grocery-store" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Groceries</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <MaterialIcons name="park" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Parks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <FontAwesome name="shopping-bag" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Shopping</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <FontAwesome name="coffee" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Café</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <MaterialIcons name="hotel" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Hotels</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <MaterialIcons name="nightlife" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Nightlife</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                  onPress={() => this.props.navigation.navigate('Results')}>
                    <MaterialIcons name="event" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Events</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{height: '43%', marginTop: '5%'}}>
              <Text style={styles.title}>Discover</Text>
              <SafeAreaView>
                <FlatList 
                  data={this.state.items }
                  renderItem={({item}) => (
                  <TouchableOpacity style={styles.item} 
                    onPress={() => this.props.navigation.navigate('Place Details', {screen: 'Place Details', place: item, })}>
                    <Text style={styles.name}>{item.name}</Text>
                      <Text style={InfoComponents.detailsOne}>{item.address}</Text>
                      <Text style={{fontSize: 15, marginBottom: 15}}>{item.category}</Text>
                      <View style={{flexDirection: "row", backgroundColor: 'white', padding: 2}} >
                        <View style={{alignItems:'flex-start', justifyContent: 'flex-start'}}>
                          <Stars
                            display={parseInt(item.rating)}
                            spacing={0}
                            count={5}
                            starSize={50}
                            fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                            emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                            halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
                          /> 
                        </View>
                        <Text style={InfoComponents.detailsOne}>{(item.reviews).length} Reviews</Text>
                      </View>
                  </TouchableOpacity>   
                  )}
                  keyExtractor={item => (item.id).toString()}
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
    backgroundColor: Colors.yellow,
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
    fontSize: 9,
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