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

// Note: change so that walks = [] a part of initial state, and then get data and set walks to that
// should be similar process for most of the screens that need data

// Need to move these points into database for premade walks + add descriptions (don't store distance/duration?)
const walks = [
  {
    id: '1',
    title: 'Campus Loop',
    distance: '3 miles',
    description: "Loop around UCLA campus.",
    likes: 3,
    coordinates:[
      {latitude:34.075685, longitude:-118.455622},
      {latitude:34.073565, longitude:-118.446958},
      {latitude:34.078231, longitude:-118.439402},
      {latitude:34.071862, longitude:-118.437367},
      {latitude:34.064088, longitude:-118.441082},
      {latitude:34.063639, longitude:-118.448263},
      {latitude:34.069555, longitude:-118.450823},
      {latitude:34.070331, longitude:-118.455025},
      {latitude:34.075646, longitude:-118.455577}
    ],
  },
  {
    id: '2',
    title: 'Holmby Park',
    distance: '3 miles',
    description: "Loop around UCLA campus.",
    likes: 4,
    coordinates:[
      {latitude:34.073549, longitude:-118.431499},
      {latitude:34.073051, longitude:-118.429618},
      {latitude:34.071118, longitude:-118.427810},
      {latitude:34.071785, longitude:-118.429237},
      {latitude:34.074007, longitude:-118.431055}
    ]
  },
  {
    id: '3',
    title: 'Boba Crawl',
    distance: '2 miles',
    description: 'Walk around Sunset Blvd.',
    likes: 5,
    coordinates:[
      {latitude:34.062340, longitude:-118.447686},
      {latitude:34.060514, longitude:-118.446060},
      {latitude:34.062585, longitude:-118.446838},
      {latitude:34.061594, longitude:-118.446378},
      {latitude:34.062584, longitude:-118.446277},
      {latitude:34.063531, longitude:-118.445407},
      {latitude:34.063651, longitude:-118.445797}
    ]
  },
  {
    id: '4',
    title: 'UCLA tour',
    distance: '0.5 miles',
    coordinates:[
      {latitude:34.075442, longitude:-118.439244},
      {latitude:34.074572, longitude:-118.441342},
      {latitude:34.073521, longitude:-118.441690},
      {latitude:34.073379, longitude:-118.440795},
      {latitude:34.069959, longitude:-118.440896},
      {latitude:34.069875, longitude:-118.443729},
      {latitude:34.070968, longitude:-118.443619},
      {latitude:34.070959, longitude:-118.442353},
      {latitude:34.070986, longitude:-118.441646},
      {latitude:34.072399, longitude:-118.441633},
      {latitude:34.072204, longitude:-118.442688},
      {latitude:34.072186, longitude:-118.444913},
      {latitude:34.070995, longitude:-118.444806},
      {latitude:34.071057, longitude:-118.449462},
      {latitude:34.072692, longitude:-118.449551},
      {latitude:34.073251, longitude:-118.451823}
    ]
  },
  {
    id: '5',
    title: "UCLA through Farmer's Market",
    distance: '8 miles',
    coordinates:[
      {latitude:34.069699, longitude:-118.445014},
      {latitude:34.063719, longitude:-118.444811},
      {latitude:34.063696, longitude:-118.447126},
      {latitude:34.060703, longitude:-118.445763}
    ]
  },
];

const {height, width} = Dimensions.get('window');
const LATITUDE = 34.06279;
const LONGITUDE = -118.44390;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .05;


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
      dis: null,
      saveWalk:{
        startingLocation: null,
        destinationLocation: null,
        forZoom: { distance: Number, duration: Number, coordinates: [] }
      },
      modalVisible: false,
      currentPath: "Current Path",
      premadePath: false,
      isLiked: false,
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

  setModalVisible = (visible) => {
    this.setState({modalVisible:visible});
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        e.nativeEvent.coordinate,
        this.state.clocation
      ],
      currentPath: "Current Path",
      premadePath: false,
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
  
  setPremadePath = (item) => {
    this.setState({
      coordinates: item.coordinates,
      currentPath: item.title,
      premadePath: true,
    })
  }

  render() {
    const { modalVisible } = this.state;
    let button;
      button=
        <TouchableOpacity style={Buttons.brownbuttonSmall}
          onPress={() => this.setModalVisible(!modalVisible)}>
          <Text style={{color:'white', alignSelf: "center"}}>Save</Text>
        </TouchableOpacity>
    return (
      <View style={styles.container}>
         {/* Map and current route display */}
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
        <Text style={{marginTop: '10%', alignSelf: 'center', fontStyle: "italic", color: '#675a5a', backgroundColor: 'white'}}>
           Click to where you want to go on the map </Text>
        {/* Current Path window on map */}
        <View style={{ flex: 'stretch', backgroundColor: '#fffae3', padding: 3, borderRadius: 10, borderWidth: 2, borderColor: '#675a5a'}}>
          <Text style={styles.title}>{this.state.currentPath}</Text>
          <View style={{flexDirection: "row"}}>
            <View style={{width: '50%'}}>
              <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Distance: {((this.state.dis)/1.609).toFixed(2)} miles</Text>
              <Text style={{marginLeft: '2%', marginBottom: '1%', fontSize: 12}}>Time: {((this.state.dur)/1).toFixed(2)} min.</Text>
            </View>
            <View style={{flex: 1, width: '50%', alignItems: 'flex-end', marginRight: '2%'}}>
              {button}
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{padding: '2%', margin: '1%', backgroundColor: Colors.brown, borderRadius: 13, width: 400}}
        onPress={ this.onSaveWalk }
      >
      <Text style={{color: "white", fontSize: 15, alignSelf: "center"}}>{this.state.startValue}</Text>
      </TouchableOpacity>
      {/* Window for saving a route */}
      <Modal style ={{marginTop: "50%"}}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={{marginTop: '50%'}}>
            <View style={styles.saveView}>
              <Text style={[styles.modalText, {marginTop: '5%'}]}>Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a title"
              />
              <Text style={styles.modalText}>Description</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a description"
                returnKeyType="done"
              />
              <TouchableOpacity
                style={[Buttons.brownbuttonSmall, {alignSelf: 'center', marginTop: '5%'}]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={{alignSelf: 'center', color: 'white'}}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Buttons.brownbuttonSmall, {alignSelf: 'center', marginTop: '5%'}]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={{alignSelf: 'center', color: 'white'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
      {/* Explore other routes portion */}
      <View style={{width: '100%', height: '65%', alignSelf: 'center', flex: 1, backgroundColor: '#F4ECC6', padding: 3, borderWidth: 1,  borderColor: '#675a5a'}}>
      <SafeAreaView style={{marginBottom: '6%'}}>
        <Text style={styles.title}> Explore </Text>
        <FlatList 
          data={walks}
          renderItem={({item}) => (
          <TouchableOpacity style={styles.item}
            onPress={() => this.setPremadePath(item)}>
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
    backgroundColor: Colors.yellow,
    alignItems: 'center',
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
  },
  saveView: {
    backgroundColor: Colors.lightblue, 
    width: "80%", 
    height: '68%', 
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.brown,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 15,
    padding: 1,
    color: Colors.brown,
    fontWeight: "500"
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: '15%',
    marginVertical: '3%',
    padding: '2%',
    fontSize: 15,
    backgroundColor: '#D7EBF4',
    borderColor: '#675a5a',
    borderBottomWidth: 3,
    alignSelf: 'center'
  }
});