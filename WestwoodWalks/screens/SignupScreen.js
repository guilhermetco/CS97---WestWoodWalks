import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const SignupScreen = ({ navigation }) => {
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
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType={'email-address'}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry
        />
        <TouchableOpacity>
        <Text style={styles.login}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
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
      justifyContent: "center"
    },
    login: {
      backgroundColor: 'white',
      color: 'black',
      marginTop: '10%',
      width: 110,
      borderRadius: 12,
      overflow: 'hidden',
      textAlign: 'center',
      fontSize: 20,
      padding: '2%'
    }
  })
  

export default SignupScreen;
