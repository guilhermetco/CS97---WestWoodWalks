import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { or } from 'react-native-reanimated';

const origin = {
    latitude:34.06377,
    longitude:-118.43518
};
const destination = {
    latitude:34.06377,
    longitude:-118.43518
};
export default function MapScreen({ navigation }){
  return(
    <View style={{ alignSelf: 'center', top: 30, width: '100%', height: 300, borderRadius: 10, overflow: 'hidden', backgroundColor: '#F4ECC6'}}>
      <MapView
      style={StyleSheet.absoluteFillObject}
      provider={MapView.PROVIDER_GOOGLE}
      region={{
          latitude: 34.06377,
          longitude:-118.43518,
          latitudeDelta:.06,
          longitudeDelta:.06
      }}
      >
          <MapViewDirections
          origin={origin}
          destination={destination}
          apikey='AIzaSyBx4y6okTMakFLVwR5PKVN9kyqpbJFykrE'
          strokeWidth={3}
          strokeColor='blue'
          />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  }
})
