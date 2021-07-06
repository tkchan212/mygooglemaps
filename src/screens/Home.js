import React from "react";
import MyGoogleMap from "../components/MyGoogleMap"; 
import {Text, View} from 'react-native';
import { Marker } from 'react-native-maps';

class Home extends React.Component {
    render() {
        return (<View
        style = {{
            flex: 1,
            justifyContent: "space-between",
            padding: 0,
        }}>
        <Text>  </Text>

        <MyGoogleMap />
        
        </View>
    );
    }
}

export default Home;
