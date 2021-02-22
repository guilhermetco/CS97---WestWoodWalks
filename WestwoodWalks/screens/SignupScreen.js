import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buttons from '../styles/Buttons.js'


class SignupScreen extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    repeatpassword: ""
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry
          onChangeText={(repeatpassword) => this.setState({repeatpassword})}
        />
        <TouchableOpacity>
          <Text style={Buttons.brownbutton}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C6E2E8',
      alignItems: 'center',
      justifyContent: "center"
    },
    logo :{
      width: 225,
      height: 225,
      marginTop: '-30%'
    },
    input: {
      width: "80%",
      borderWidth: 1,
      height: 50,
      marginVertical: 10,
      padding: 10,
      justifyContent: "center",
      backgroundColor: '#D7EBF4',
      borderColor: '#675a5a',
      borderBottomWidth: 3  
    }
  })
  

export default SignupScreen;
