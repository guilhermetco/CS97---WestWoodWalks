import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from "react-native-maps";
import { Text } from 'react-native';
import styles from './HomeScreen.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

const LATITUDE = 34.06279;
const LONGITUDE = -118.44390;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .05;


const GOOGLE_MAPS_APIKEY = 'AIzaSyBx4y6okTMakFLVwR5PKVN9kyqpbJFykrE';

export default class MapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [
        {
          latitude: 34.06279,
          longitude: -118.44390,
        },
        {
          latitude: 34.06241,
          longitude: -118.44375,
        },
      ],
      clocation: {
        latitude: 34.06637,
        longitude:-118.44524,
      },
      dur: null,
      dis: null
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
  onRoutePress = (long, lat ) => {
    this.setState({
      coordinates: [
        {latitude: lat, longitude: long},
        this.state.clocation
      ],
    });
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
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
              this.setState({
                dis: result.distance,
                dur: result.duration
              })
            }}
            onError={(errorMessage) => {
            }}
          />
        )}
        <Marker coordinate={{latitude: this.state.clocation.latitude, longitude: this.state.clocation.longitude}} />
      </MapView>
      </View>
      </View>
      <View>
        <Text>
          Premade Routes
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>
            The Inverted Fountain
          </Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity>
          <Text>
            Target
          </Text>
        </TouchableOpacity>
      </View>
      </React.Fragment>
    );
  }
}
