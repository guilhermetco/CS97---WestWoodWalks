import React from 'react';
import { Component, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, } from 'react-native';
import 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { or } from 'react-native-reanimated';
import { TextInput } from 'react-native';
import styles from './HomeScreen.js'
import { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
    {id:1,
    name: 'In-N-Out'},
    {id:2,
    name: 'Target'},
    {id:3,
    name: "Trader Joe's"},
]

class ReviewS extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    render () {
        return (
            <View>
            <Fragment>
            {/* Multi */}
            <SearchableDropdown
              multi={true}
              onItemSelect={(item) => {
                this.setState({ selectedItems: items });
              }}
              containerStyle={{ padding: 5 }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#F4ECC6',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              items={items}
              defaultIndex={2}
              resetValue={false}
              textInputProps={
                {
                  placeholder: "Search for a Place or Event",
                  onTextChange: text => alert(text)
                }
              }
              listProps={
                {
                  nestedScrollEnabled: true,
                }
              }
            />
        </Fragment>
        </View>
        )
    }
}

const ReviewScreen = () =>{
    const [text, setText] = useState('');
    return(
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Search for a Place/Event"
        onChangeText={text => setText(text)}
        />
    </View>
    );
}

export default ReviewS;