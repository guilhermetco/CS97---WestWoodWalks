import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'

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
        { text: "Submit", onPress: this.PostReview }
      ],
      { cancelable: false }
    );
    
    PostReview = () => {
      var params = JSON.stringify({
        'description': this.state.review,
        'profile': [global.session_id],
        'rating': this.state.rating,
        'business': [this.state.place.id],
      });
      axios
        .post("http://127.0.0.1:8000/review/", params,
        {"headers": {
          'content-Type': 'application/json'
        }})
        .then(this.UpdateAverageRating)
        .catch(error => console.log(error)
        );
    }

    // Updates average rating of business based on newest review
    UpdateAverageRating = () => {
      var average = ((this.state.rating * this.state.place.reviews.length) + this.state.rating)/(this.state.place.reviews.length + 1);
      average = Math.round(average*2)/2;
      console.log(average)
      var param = JSON.stringify({
        'rating': average,
      });
      axios
        .patch(`http://127.0.0.1:8000/business/${this.state.place.id}`, param,
        {"headers": {
          'content-Type': 'application/json'
        }})
        .then(this.props.navigation.navigate('Place Details', {place: this.state.place}))
        .catch(error => console.log(error)
        );
    }

    constructor(props) {
        super(props);
        this.state={
            rating:0,
            place: props.route.params.place,
            profile: 0,
            review: ""
         }
        console.log(global.session_id)
    }  
      render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Stars
            update={(val)=>{this.setState({rating: val})}}
            half={true}
            spacing={8}
            count={5}
            default={1}
            starSize={45}
            fullStar={<Icon name={'star'} size={45} color={"yellow"}/>}
            emptyStar={<Icon name={'star-outline'} size={45} color={"yellow"}/>}
            halfStar={<Icon name={'star-half'} size={45} color={"yellow"}/>}
            /> 
          <TextInput
            style={styles.input}
            placeholder="Write A Review"
            onChangeText={(review) => this.setState({review})}
            multiline={true}
            textAlignVertical="top"
            blurOnSubmit={true}

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
