import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native';
import Buttons from '../styles/Buttons.js'
import axios from 'axios'

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: ""
  }

  Login = () => {
    var params2 = JSON.stringify({
      'username': this.state.username,
      'password': this.state.password,
    });
    axios
      .post("http://127.0.0.1:8000/authenticate/", params2,
      {"headers": {
        'content-Type': 'application/json'
      }})
      .then(response => this.getProfile(response.data.id))
      .catch(error => console.log(error)
      );
  }

  getProfile = (user_id) => {
    axios
      .get(`http://127.0.0.1:8000/profiles/?user_id=${user_id}` )
      .then(response => this.set_ID(response.data.results[0].id))
      .catch(error => console.log(error)
);
}

  set_ID = (profile_id) => {
    global.session_id = profile_id
    this.props.navigation.navigate('Explore')
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
        placeholder="Username or Email"
        keyboardType={'email-address'}
        onChangeText={(username) => this.setState({username})}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) => this.setState({password})}
      />
      <TouchableOpacity
        onPress={this.Login}> 
        <Text style={Buttons.brownbutton}>Login</Text>
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
    width: '50%',
    height: '20%',
    marginTop: '-30%'
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: '7%',
    marginVertical: '3%',
    padding: '2%',
    justifyContent: "center",
    backgroundColor: '#D7EBF4',
    borderColor: '#675a5a',
    borderBottomWidth: 3 
  }
})

export default LoginScreen;
