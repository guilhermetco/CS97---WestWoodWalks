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
import Colors from '../styles/Colors.js'
import axios from 'axios'
import InfoComponents from '../styles/InfoComponents.js';
  

class PlaceDetailsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            place: props.route.params.place,
            average_rating: 0,
        }
    };
    componentDidMount () {
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('focus', () => {
        axios
          .get(`http://127.0.0.1:8000/business/${this.state.place.id}`)
          .then(response => this.setState({place: response.data}))
          .catch(error => console.log(error)
          );
        });
      }

    render() {
    return(
    <SafeAreaView style={styles.container}>
        <View style={InfoComponents.item}>
        <View style={{flexDirection: "row", alignItems:'flex-start', justifyContent: 'flex-start'}}>
            <Text style={styles.title}>{this.state.place.name}</Text>
         </View>
        <Text style={InfoComponents.detailsOne}>{this.state.place.address}</Text>
        <Text style={InfoComponents.detailsOne}>{this.state.place.category}</Text>
        <View style={{flexDirection: "row", backgroundColor: 'white', marginTop: 10, padding: 2}} >
            <View style={{alignItems:'flex-start', justifyContent: 'flex-start'}}>
                <Stars
                  display={parseFloat(this.state.place.rating)}
                  default={parseFloat(this.state.place.rating)}
                  spacing={0}
                  count={5}
                  half={true}
                  disabled={true}
                  starSize={50}
                  fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
                  emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
                  halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
                /> 
            </View>
            <Text style={InfoComponents.detailsOne}>{(this.state.place.reviews).length} Reviews</Text>
        </View>
        <TouchableOpacity style={{padding: '2%', backgroundColor: Colors.brown, borderRadius: 8, alignSelf: "stretch", width: '100%'}}
                onPress={() => this.props.navigation.navigate('Directions', {place: this.state.place})}>
                <Text style={{color: "white", fontSize: 15, alignSelf:"center"}}>Go Here</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.item}>
        <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 22}}>Reviews</Text>
            <TouchableOpacity style={[Buttons.brownbuttonSmall, {marginLeft: '60%'}]}
                onPress={() => this.props.navigation.navigate('Write Review', {place: this.state.place})}>
                <Text style={{fontSize: 8, color: 'white'}}>Write Review</Text>
            </TouchableOpacity>
        </View>
            <View
                style={{
                    marginTop: 5,
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <FlatList style={{marginBottom: '15%'}}
                data={this.state.place.reviews}
                renderItem={({item}) => (
                    <View style={styles.review}>
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
                    </View>
                )}
                keyExtractor={item => (item.id).toString()}
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
    alignItems: 'stretch',
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
    padding: '1%'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: '2%',
    marginVertical: 8,
    backgroundColor: '#D7EBF4',
    justifyContent: 'flex-start',
    height:"85%",
},
})

export default PlaceDetailsScreen;