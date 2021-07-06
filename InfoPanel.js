import {Text, View, Image} from 'react-native';
import React from 'react';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    console.log('info panel updated');
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 500,
          left: 25,
          right: 25,
          bottom: 75,
          justifyContent: 'center',
          alignItems: 'center',
          alignItems: 'center',
          backgroundColor: '#FFEBD1',
          borderRadius: 30,
          padding: 30,
          shadowColor: "#000",
          shadowOffset: {
          	width: 0,
          	height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Image style={{
          width: 100, height: 100,
        }} source={this.props.place.img} />
        <Text></Text> 
        <Text style={{fontFamily: 'HelveticaNeue-Medium'}}>{this.props.place.title}</Text>
        <Text style={{fontFamily: 'HelveticaNeue-Thin'}}>{this.props.place.description} </Text>
        
      </View>
    );
  }
}

export default InfoPanel;
