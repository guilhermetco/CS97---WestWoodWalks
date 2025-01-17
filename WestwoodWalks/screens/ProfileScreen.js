import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {TouchableOpacity} from 'react-native'
import Buttons from '../styles/Buttons.js';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
            <TouchableOpacity
              style={Buttons.profilebutton}
              onPress={() => navigation.navigate('Account Information')}
            >
              <MaterialIcons name="account-circle" size={70} color="#675a5a"  />
              <Text style={styles.label}>Account Information</Text> 
            </TouchableOpacity>
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