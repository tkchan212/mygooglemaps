import React from 'react';
import InfoPanel from './InfoPanel';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Alert, View, Dimensions, ScrollView, StyleSheet} from 'react-native';

const pos = [
  {
    coordinates: {latitude: 22.41730886742012, longitude: 114.20891833444016},
    title: '紙與咖啡 Paper & Coffee',
    description: '205, Pommeranke Student Centre, CUHK',
    img: require('./pics/papercoffee.jpg'),
  },
  {
    coordinates: {latitude: 22.290455485710456, longitude: 114.20038336292308},
    title: '現 Cafe Gen',
    description: 'G/F, Tung Fat Building, Kam Ping St, Shu Kuk St, North Point, Hong Kong',
    img: require('./pics/gen.png'),
  },
  {
    coordinates: {latitude: 22.375174839351452, longitude: 114.17849810621028},
    title: '屋子空間 Uchi Place',
    description: '12A, Section F 9nd St, Tai Wai Village, Hong Kong',
    img: require('./pics/uchi.jpg'),
  },
];

class MyGoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: pos,
      curItem: null,
      marginBottom: 1,
    };
  }

  renderInfoPanel() {
    return <InfoPanel />;
  }

  componentDidUpdate() {
    console.log('map updated');
  }
  _onMapReady = () => this.setState({marginBottom: 0});
  render() {
    return (
      <View style={{
        position: 'relative', 
        flex : 1,
        top: 15,
        padding: 0,
        
        }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          marker={this.state.marker}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: 22.32,
            longitude: 114.17,
            latitudeDelta: 0.131,
            longitudeDelta: 0.06,
          }}
          onPress={e => {
            console.log(e);
            if (
              e.nativeEvent.action === undefined ||
              e.nativeEvent.action === 'press'
            ) {
              this.setState({curItem: null});
            }
          }}
          style={{
            position: 'absolute',
            borderRadius: 10,
            flex : 1,
            left: 10,
            right:10,
            top: 0,
            bottom: 0,
            
            flex: 1,
            marginBottom: this.state.marginBottom,
          }}
          onMapReady={this._onMapReady}>
          {pos.map(item => {
            return (
              <Marker
                coordinate={item.coordinates}
                title={item.title}
                onPress={() => {
                  console.log(item);
                  this.renderInfoPanel(item);
                  this.setState({curItem: item});
                }}
                image={require('./resized.png')}
              />
            );
          })}
        </MapView>
        {this.state.curItem ? (
          <InfoPanel place={this.state.curItem} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default MyGoogleMap;
