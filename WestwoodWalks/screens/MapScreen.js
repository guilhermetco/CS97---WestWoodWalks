import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Alert, TextInput, Image} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from "react-native-maps";
import { Text } from 'react-native';
import styles from './HomeScreen.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Buttons from '../styles/Buttons.js'
import clocation from '../assets/clocation.png'

const { width, height } = Dimensions.get('window');
const LATITUDE = 34.06279;
const LONGITUDE = -118.44390;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .05;
const DATA = [
  {
    title: 'Target',
    data: {latitude:34.06277, longitude:-118.44392},
  },
  {
    title: 'Inverted Fountain',
    data: {latitude:34.07032, longitude:-118.44074},
  },
  {
    title: 'Royce Hall',
    data: {latitude:34.07301, longitude:-118.44229},
  },
  {
    title: 'Charles Young Research Library',
    data: {latitude:34.07523, longitude:-118.44144},
  },
];

const GOOGLE_MAPS_APIKEY = 'AIzaSyBx4y6okTMakFLVwR5PKVN9kyqpbJFykrE';

export default class MapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startValue: 'Start',
      initialCoords:[
        {latitude:34.073026, longitude:-118.465619},
        {latitude:34.067223, longitude:-118.410851}
      ],
      coordinates: [
        {
          latitude: 34.06279,
          longitude: -118.44390,
        },
      ],
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
    }
    };
    this.mapView = null;
  }
  
  onMapPress = (e) => {
    this.setState({
      coordinates: [
        e.nativeEvent.coordinate,
        this.state.clocation
      ],
    });
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
    this.setState({coordinates: [...this.state.coordinates,
      this.state.clocation]})
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
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
        <Text>Distance: {this.state.dis}</Text>
        <Text>Time: {this.state.dur} min</Text>
        <View style={{width: 400, height: 400,}}>
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        zoomEnabled = {true}
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
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="blue"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              this.setState({
                dis: result.distance,
                dur: result.duration,
                forZoom: result
              })
            }}
          />
        )}
        <Marker coordinate={{latitude: this.state.clocation.latitude, longitude: this.state.clocation.longitude}}/>
      </MapView>
      </View>
      <TouchableOpacity
        onPress={ this.onSaveWalk }
      >
      <Text style={Buttons.brownbutton}>{this.state.startValue}</Text>
      </TouchableOpacity>
      </View>
      <View>
        <Text>
          Popular Routes
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => { this.setState({ coordinates:[{latitude:34.07032, longitude:-118.44074}, this.state.clocation]}) }}>
          <Text>
            The Inverted Fountain
          </Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={() => { this.setState({ coordinates:[{latitude:34.06277, longitude:-118.44392}, this.state.clocation]}) }}>
          <Text>
            Target
          </Text>
        </TouchableOpacity>
      </View>
      </React.Fragment>
    );
  }
}
