import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => navigation.navigate('Signup')}
       >
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.anonymous}>Continue Anonymously</Text>
       </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo :{
    width: 225,
    height: 225,
    marginTop: '5%'
  },
  title :{
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 25,
    color: '#675A5A',
    marginTop: '-12%'
  },
  login: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: '20%',
    width: 110,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 20,
    padding: '2%'
  },
 signup: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: '8%',
    width: 110,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 20,
    padding: '2%'
  },
  anonymous: {
    backgroundColor: '#F4ECC6',
    color: 'black',
    marginTop: '4%',
    fontWeight: 'bold',
    width: 200,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 12,
    padding: '2%'
  }
});

export default HomeScreen;


