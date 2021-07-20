import * as React from 'react';
import { View, Image } from 'react-native';


export default class FBScreen extends React.Component {
 
  render() {
    return(
      <View style={{flex:1}}>
        <Image 
            style={{width:420, height: 422}}
            source={require('../EDITED-SOUSTIN-TOON-ME-FACEBOOK.jpg')} />
      </View>
    )
  }
}