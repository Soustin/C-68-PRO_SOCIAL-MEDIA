import * as React from 'react';
import { View, Image } from 'react-native';


export default class FBScreen extends React.Component {
 
  render() {
    return(
      <View style={{flex:1}}>
        <Image
            style={{width: 410, height: 290}}
            source={require('../EDITED-SOUSTIN-TOON-ME-INSTAGRAM.gif')} />
      </View>
    )
  }
}