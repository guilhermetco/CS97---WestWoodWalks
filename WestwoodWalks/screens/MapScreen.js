import React, { Component } from 'react';
import { FlatList, SafeAreaView, Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from "react-native-maps";
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoComponents from '../styles/InfoComponents.js'

const walks = [
  {
    id: '1',
    title: 'Grocery Run',
    distance: '3 miles',
    description: "Route to Trader Joes, Target, and Sprouts from dorms.",
    likes: 3
  },
  {
    id: '2',
    title: 'Morning Run',
    distance: '3 miles',
    description: "Loop around UCLA campus.",
    likes: 4
  },
  {
    id: '3',
    title: 'Scenic Evening Walk',
    distance: '2 miles',
    description: 'Walk around Sunset Blvd.',
    likes: 5
  },
  {
    id: '4',
    title: 'To Powell',
    distance: '5 miles',
    description: ''
  },
  {
    id: '5',
    title: 'Walk 5',
    distance: '0.5 miles'
  },
  {
    id: '6',
    title: 'Walk 6',
    distance: '8 miles'
  },
  {
    id: '7',
    title: 'Walk 7',
    distance: '7 miles'
  },
  {
    id: '8',
    title: 'Walk 8',
    distance: '3 miles'
  },
  {
    id: '9',
    title: 'Walk 9',
    distance: '2 miles'
  },
];

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
      <View style={styles.container}>
        <Text style={{marginTop: '10%', alignSelf: 'center', fontStyle: "italic", color: '#675a5a'}}> Click to where you want to go on the map</Text>
        <View style={{width: '100%', height: '65%', padding: '2%', alignSelf: 'center'}}>
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
              //console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              //console.log(`Distance: ${result.distance} km`)
              //console.log(`Duration: ${result.duration} min.`)
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
        <View style={{ flex: 'stretch', backgroundColor: '#fffae3', padding: 3, borderRadius: 10, borderWidth: 2, borderColor: '#675a5a'}}>
          <Text style={styles.title}>Current Path</Text>
          <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Distance: {this.state.dis} miles</Text>
          <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Time: {this.state.dur} min.</Text>
        </View>
      </View>
      <View style={{width: '100%', height: '65%', alignSelf: 'center', flex: 1, backgroundColor: '#F4ECC6', padding: 3, borderWidth: 1,  borderColor: '#675a5a'}}>
      <SafeAreaView style={{marginBottom: '6%'}}>
        <Text style={styles.title}> Explore </Text>
        <FlatList 
          data={walks}
          renderItem={({item}) => (
          <TouchableOpacity style={styles.item} >
            <Text style={styles.pathTitle}>{item.title}</Text>
            <Text style={styles.detailsOne}>Distance: {item.distance}</Text>
            <Text style={styles.detailsTwo}>{item.description}</Text>
          </TouchableOpacity>   
          )}
        keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECC6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title :{
    fontSize: 17,
    color: '#675A5A',
    fontWeight: "500",
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#fffae3',
    padding: '2%',
    marginVertical: '2%',
    justifyContent: 'flex-start',
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
  detailsTwo: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: '1%',
  }
});
