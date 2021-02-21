import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, FlatList, SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';

import InfoComponents from '../styles/InfoComponents.js';

const place = {
    id: '1',
    title: 'Powell Library',
    address: '123 street ave, Los Angeles',
    type: "Library",
    rating: 4.5,
    numofreviews: 4,
    reviews: [
        { 
            id: "1",
            review: "nvwljrnvalke;vnsldnvw, vwlkmrflkwmclwmd vcwlkejflkwenflw.md w,dmfnlwejflkwdnc,mwd cwlnflwkejflk c,lwnvowijflwdkv ,wejnf;qoejfko;eahja;k fv lajrlja;klfnva/;kenv;akehr;vokejnv/alieorj;agioejr",
            rating: 4.5,
            user: "username",
            date: "01/23/21 "
        },
        { 
            id: "2",
            review: "lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla lalalallalalalallallalallalalalla",
            rating: 3.5,
            user: "username",
            date: "01/28/21" 
        },
        { 
            id: "3",
            review: "lalalallalalalallallalallalalalla",
            rating: 4,
            user: "username",
            date: "01/29/21"
        },
        { 
            id: "4",
            review: "lalalallalalalallallalallalalalla",
            rating: 4,
            user: "username",
            date: "01/29/21"
        },
        { 
            id: "5",
            review: "lalalallalalalallallalallalalalla",
            rating: 4,
            user: "username",
            date: "01/30/21"
        }

    ]
};
  

class PlaceDetailsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLiked: true
        };
    }
    like() {
        this.setState({
            isLiked: !(this.state.isLiked)
        })
    };

    renderlike() {
        if (this.state.isLiked)
            return (
                <AntDesign name="heart" size={30} color="black" /> 
            )
        else 
            return (
                <AntDesign name="hearto" size={30} color="black" />
            )
    };
    render() {
    return(
    <SafeAreaView style={styles.container}>
        <View style={InfoComponents.item}>
        <View style={{flexDirection: "row", alignItems:'flex-start', justifyContent: 'flex-start'}}>
            <Text style={styles.title}>{place.title}</Text>
            <TouchableOpacity onPress={() => this.like()}>
                {this.renderlike()}
            </TouchableOpacity>
         </View>
        <Text style={InfoComponents.detailsOne}>{place.address}</Text>
        <Text style={InfoComponents.detailsOne}>{place.type}</Text>
        <View style={{flexDirection: "row", backgroundColor: 'white', marginTop: 10, padding: 2}} >
            <View style={{alignItems:'flex-start', justifyContent: 'flex-start'}}>
                <Stars
                  display={place.rating}
                  spacing={0}
                  count={5}
                  starSize={50}
                  fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                  emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                  halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
                /> 
            </View>
            <Text style={InfoComponents.detailsOne}>{place.numofreviews} Reviews</Text>
        </View>
        </View>
        <View style={styles.item}>
            <Text style={{fontSize: 22}}>Reviews</Text>
            <View
                style={{
                    marginTop: 5,
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <FlatList
                data={place.reviews}
                renderItem={({item}) => (
                    <View style={styles.review}>
                        <Text style={InfoComponents.detailsOne}>{item.user} wrote:</Text>
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
                <Text style={InfoComponents.detailsTwo}>"{item.review}"</Text>
                <Text style={InfoComponents.detailsOne}>Last Modified: {item.date}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E2E8',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'flex-start',
    width: '90%',
  },
  review: {
    backgroundColor: "#f2fafc",
    marginBottom: 10,
    padding: 5
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    width: 400,
    marginVertical: 8,
    backgroundColor: '#D7EBF4',
    justifyContent: 'flex-start',
    height:"85%"
},
})

export default PlaceDetailsScreen;