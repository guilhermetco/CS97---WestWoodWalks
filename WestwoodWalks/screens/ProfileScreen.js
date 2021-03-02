import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buttons from '../styles/Buttons.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
        <View style={{flexDirection: "row"}} >
            <TouchableOpacity
              style={Buttons.profilebutton}
              onPress={() => navigation.navigate('Account Information')}
            >
              <MaterialIcons name="account-circle" size={70} color="#675a5a"  />
              <Text style={styles.label}>Account Information</Text> 
            </TouchableOpacity>
            <TouchableOpacity
              style={Buttons.profilebutton}
              onPress={() => navigation.navigate('Favorites')}
            >
              <Ionicons name="heart" size={70} color="#675a5a"  />
              <Text style={styles.label}>Favorites</Text> 
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}} >
          <TouchableOpacity
            style={Buttons.profilebutton}
            onPress={() => navigation.navigate('My Walks')}
          >
            <MaterialIcons name="directions-walk" size={70} color="#675a5a"  />
            <Text style={styles.label}>My Walks</Text> 
          </TouchableOpacity>
          <TouchableOpacity
            style={Buttons.profilebutton}
            onPress={() => navigation.navigate('My Reviews')}
          >
            <MaterialIcons name="rate-review" size={70} color="#675a5a"  />
            <Text style={styles.label}>My Reviews</Text> 
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={Buttons.brownbutton}>Logout</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C6E2E8',
      alignItems: 'center',
      justifyContent: "center"
    },
    container2: {
      flex: 1,
      backgroundColor: '#C6E2E8',
      alignItems: 'center',
      marginTop: '40%',
      marginBottom: '30%',
      justifyContent: "center"
    },
    label:{
      color: '#675a5a',
      alignItems: 'center',
      textAlign: "center"
    }

  })

  export default ProfileScreen;