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
import { useIsFocused } from "@react-navigation/native"


class ReviewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          inputvalue: "",
          items: []
        }
    };


submitInput = (value) => {
  axios
    .get(`http://127.0.0.1:8000/business/?name=${value}`)
    .then(response =>  this.props.navigation.navigate('Results', {places: response.data.results}))
    .catch(error => console.log(error)
    );
}

getCategory = (category) => {
  axios
    .get(`http://127.0.0.1:8000/business/?category=${category}`)
    .then(response =>  this.props.navigation.navigate('Results', {places: response.data.results}))
    .catch(error => console.log(error)
    );
}

updateData() {
  this.componentDidMount();
}

componentDidMount () {
  const {navigation} = this.props;
  this.focusListener = navigation.addListener('focus', () => {
  axios
    .get("http://127.0.0.1:8000/business")
    .then(response => this.setState({items: response.data.results}))
    .catch(error => console.log(error)
    );
  });
}

    render () {
        return (
            <View style={styles.container}>
            <View style={{flexDirection: "row", marginTop: '10%'}} >
            <TextInput
              style={styles.input}
              placeholder="Search by business name..."
              onChangeText={(inputvalue) => this.setState({inputvalue})}>
            </TextInput>
            </View>
            <TouchableOpacity style={[Buttons.brownbuttonSmall, {width: '25%', alignSelf: "center"}]}
            onPress={() => this.submitInput(this.state.inputvalue)}>
            <Text style={{alignSelf: "center", color: "white"}}>Search</Text>
            </TouchableOpacity>
            <View style={{height: '30%', marginTop: '10%'}}>
              <Text style={styles.title}>Search by Category</Text>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("transportation")}>
                    <MaterialIcons name="emoji-transportation" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Transportation</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("health")}>
                    <MaterialIcons name="local-hospital" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Health</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("finance")}>
                    <MaterialIcons name="attach-money" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Finance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("food")}>
                    <Ionicons name="restaurant" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Food</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", height: '45%'}} >
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("education")}>
                    <Ionicons name="school" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Education</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("retail")}>
                    <FontAwesome name="shopping-bag" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Retail</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("service")}>
                    <MaterialIcons name="miscellaneous-services" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Service</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Buttons.categorybutton}
                    onPress={() => this.getCategory("miscellaneous")}>
                    <MaterialIcons name="place" size={24} color={Colors.brown} />
                    <Text style={styles.categories}>Miscellaneous</Text>
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
                    onPress={() => this.props.navigation.navigate('Place Details', {screen: 'Place Details', place: item })}>
                    <Text style={styles.name}>{item.name}</Text>
                      <Text style={InfoComponents.detailsOne}>{item.address}</Text>
                      <Text style={{fontSize: 15, marginBottom: 15}}>{item.category}</Text>
                      <View style={{flexDirection: "row", backgroundColor: 'white', padding: 2}} >
                        <View style={{alignItems:'flex-start', justifyContent: 'flex-start'}}>
                          <Stars
                            display={parseFloat(item.rating)}
                            default={parseFloat(item.rating)}
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
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: "55%",
    marginVertical: '3%',
    marginVertical: '3%',
    marginVertical: '3%',
    padding: '2%',
    justifyContent: "center",
    backgroundColor: Colors.lightyellow,
    borderColor: '#675a5a',
    borderBottomWidth: 3 
  }
})

export default ReviewScreen;