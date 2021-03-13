import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native'
import Buttons from '../styles/Buttons.js'
import axios from 'axios'


class SignupScreen extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    repeatpassword: ""
  }


  SignUp = () => {
    var params = JSON.stringify({
      'username': this.state.username,
      'password1': this.state.password,
      'password2': this.state.repeatpassword,
      'email': this.state.email,
    });
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration", params,
      {"headers": {
        'content-Type': 'application/json'
      }})
      .then(this.Authenticate)
      .catch(error => console.log(error)
      );
  }

  Authenticate = () => {
    var params2 = JSON.stringify({
      'username': this.state.username,
      'password': this.state.password,
    });
    axios
      .post("http://127.0.0.1:8000/authenticate/", params2,
      {"headers": {
        'content-Type': 'application/json'
      }})
      .then(response => this.Get_ID(response.data.id))
      .catch(error => console.log(error)
      );
  }

  Get_ID = (userid) => {
    var params3 = JSON.stringify({
      'user_id': userid,
    });
    axios
      .post("http://127.0.0.1:8000/profiles/", params3,
      {"headers": {
        'content-Type': 'application/json'
      }})
      .then(this.props.navigation.navigate('Login'))
      .catch(error => console.log(error)
      );
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
        <TouchableOpacity
          onPress={this.SignUp}>
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
  

export default SignupScreen;
