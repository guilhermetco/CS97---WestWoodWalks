import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native'
import Buttons from '../styles/Buttons.js'
import Colors from '../styles/Colors.js'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.title}>Westwood Walks</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
      <Text style={Buttons.brownbutton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => navigation.navigate('Signup')}
       >
        <Text style={Buttons.brownbutton}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo :{
    width: 225,
    height: 225,
    marginTop: '3%'
  },
  title :{
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 25,
    color: '#675A5A',
    marginTop: '-12%'
  },
  anonymous: {
    backgroundColor: Colors.yellow,
    color: 'black',
    marginTop: '4%',
    fontWeight: 'bold',
    width: '30%',
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 12,
    padding: '2%'
  }
});

export default HomeScreen;

