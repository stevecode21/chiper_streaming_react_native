/**
 * Libraries
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * Components
 */
import Header from '../../Header/container/Header';

export default function Recommended(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={props.navigation} />
    </View>
  );
}
