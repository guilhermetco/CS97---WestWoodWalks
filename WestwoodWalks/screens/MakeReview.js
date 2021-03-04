import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import Stars from 'react-native-stars';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MakeReview extends Component {
    onSubmit = () =>
    Alert.alert(
      "Are You Sure You'd Like To Submit?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Submit", onPress: () => this.props.navigation.navigate('Explore') }
      ],
      { cancelable: false }
    );

    constructor(props) {
        super(props);
        this.state={
            rating:0
         }
    }  
    state = {
        review: ""
      }
      render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Stars
            display={this.state.rating}
            spacing={8}
            count={5}
            starSize={70}
            fullStar={<Icon name={'star'} size={20} color={"gold"}/>}
            emptyStar={<Icon name={'star-outline'} size={20} color={"gold"}/>}
            halfStar={<Icon name={'star-half'} size={20} color={"gold"}/>}
            /> 
          <TextInput
            style={styles.input}
            placeholder="Write A Review"
            onChangeText={(review) => this.setState({review})}
          />
          <TouchableOpacity onPress={this.onSubmit}>
            <Text style={Buttons.brownbutton}>Submit Review</Text>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
      );
      }
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E2E8',
    alignItems: 'center',
    justifyContent: "center"
  },
  logo :{
    width: '50%',
    height: '20%',
    marginTop: '-30%'
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: '70%',
    marginVertical: '3%',
    padding: '2%',
    justifyContent: "center",
    backgroundColor: '#D7EBF4',
    borderColor: '#675a5a',
    borderBottomWidth: 3 
  }
})
