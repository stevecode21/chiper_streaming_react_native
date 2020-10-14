import React from 'react';
import {Text, View, Image} from 'react-native';

export default function VideoStreamings() {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <View style={{backgroundColor: 'transparent', flex: 4}}>
        <Image
          source={require('../../../assets/img/test.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{backgroundColor: 'purple', flex: 1}}>
        <Text>123 likes</Text>
      </View>
      <View style={{backgroundColor: 'red', flex: 3}}>
        <Text>Comentarios</Text>
      </View>
    </View>
  );
}
