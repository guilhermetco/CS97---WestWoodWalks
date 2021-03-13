import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Currently not used
class AccountInfoScreen extends React.Component {
  state = {
    username: "",
    email: ""
  }
  render() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="account-circle" size={150} color="#675a5a" style={{marginTop: '-30%', marginBottom: '5%'}} />
      <Text style={styles.label}>Username</Text>
      <View style={styles.input}>
        <Text>myusername</Text>
      </View>
      <Text style={styles.label}>Email</Text>
      <View style={styles.input}>
        <Text>myemail</Text>
      </View>
    </View>
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
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontWeight: "500"
  }
})

export default AccountInfoScreen;