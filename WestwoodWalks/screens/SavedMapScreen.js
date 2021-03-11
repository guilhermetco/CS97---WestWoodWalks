import React, { Component } from 'react';
import { FlatList, SafeAreaView, Dimensions, StyleSheet, View, Image, TextInput, Modal } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from "react-native-maps";
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Buttons from '../styles/Buttons.js'
import InfoComponents from '../styles/InfoComponents.js'
import Colors from '../styles/Colors.js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const {height, width} = Dimensions.get('window');
const LATITUDE = 34.06279;
const LONGITUDE = -118.44390;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .05;


const GOOGLE_MAPS_APIKEY = 'AIzaSyBx4y6okTMakFLVwR5PKVN9kyqpbJFykrE';

export default class SavedMapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startValue: 'Start',
      initialCoords:[
        {latitude:34.073026, longitude:-118.465619},
        {latitude:34.067223, longitude:-118.410851}
      ],
      coordinates: props.route.params.walk.coordinates,
      clocation: {
        latitude: 34.06637,
        longitude:-118.44524,
      },
      dur: null,
      dis: null,
      saveWalk:{
        startingLocation: null,
        destinationLocation: null,
        forZoom: { distance: Number, duration: Number, coordinates: [] }
      },
      currentPath: props.route.params.walk.title,
    };

    this.mapView = null;
  }
  onSaveWalk = () =>{
    this.setState({
      saveWalk:{
        startingLocation:this.state.coordinates[1],
        destinationLocation: this.state.coordinates[0]},
    })
    if(this.state.startValue=='Start'){
      this.setState({
        startValue:'Stop'
      });
      this.mapView.fitToCoordinates(this.state.forZoom.coordinates,{
        edgePadding: {
          right: (width / 10),
          bottom: (height / 20),
          left: (width / 10),
          top: (height / 20),
        }
        }
      );
    }
    else{
      this.setState({
        startValue:'Start'
      });
      this.mapView.fitToCoordinates(this.state.initialCoords,{
        edgePadding: {
          right: width,
          bottom: height,
          left: width,
          top: height
        }
        }
      );
    }
  }

  componentDidMount() {
    this.currentLocation();
    this.intervalID = setInterval(this.currentLocation.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.setState({
          clocation: {latitude, longitude}
        });
      },
      { enableHighAccuracy: true, timeout:20000, maximumAge: 1000}
    );
  };
  
  setPremadePath = (item) => {
    this.setState({
      coordinates: item.coordinates,
      currentPath: item.title,
      premadePath: true,
    })
  }

  render() {
    return (
      <View style={styles.container}>
         {/* Map and current route display */}
        <View style={{width: '100%', height: '90%', padding: '2%', alignSelf: 'center'}}>
          <MapView
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            style={StyleSheet.absoluteFill}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
          {this.state.coordinates.map((coordinate, index) =>
            <Marker key={`coordinate_${index}`} coordinate={coordinate} />
          )}
          {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            waypoints={this.state.coordinates}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="blue"
            optimizeWaypoints={true}
            onStart={(params) => {
              //console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              //console.log(`Distance: ${result.distance} km`)
              //console.log(`Duration: ${result.duration} min.`)
              this.setState({
                dis: result.distance,
                dur: result.duration,
                forZoom: result
              })
            }}
            onError={(errorMessage) => {
            }}
          />
        )}
        <Marker coordinate={{latitude: this.state.clocation.latitude, longitude: this.state.clocation.longitude}}>
        <MaterialIcons name="my-location" size={24} color={Colors.brown} />
        </Marker>
        </MapView>
        {/* Current Path window on map */}
        <View style={{ flex: 'stretch', backgroundColor: Colors.lightblue, padding: 3, borderRadius: 10, borderWidth: 2, borderColor: '#675a5a'}}>
          <Text style={styles.title}>{this.state.currentPath}</Text>
          <View style={{flexDirection: "row"}}>
            <View style={{width: '50%'}}>
              <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Distance: {((this.state.dis)/1.609).toFixed(2)} miles</Text>
              <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Time: {((this.state.dur)/1).toFixed(2)} min.</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{padding: '2%', marginTop: '5%', backgroundColor: Colors.lightblue, borderRadius: 13, width: 300, alignSelf: "center", borderColor: Colors.brown, borderWidth: 2}}
        onPress={ this.onSaveWalk }
      >
      <Text style={{color: Colors.brown, fontSize: 15, alignSelf: "center"}}>{this.state.startValue}</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title :{
    fontSize: 17,
    color: '#675A5A',
    fontWeight: "500",
    alignSelf: 'center',
  },
  pathTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#675A5A',
    alignSelf: 'flex-start',
    marginBottom: '1%'
  },
  detailsOne: {
    fontSize: 12
  },
});