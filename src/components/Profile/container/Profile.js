import React from 'react';
import {View, Text} from 'react-native';

export default function Profile(props) {
  console.log(props.navigation.goBack);
  return (
    <View>
      <Text onPress={() => props.navigation.goBack()}>Profile</Text>
    </View>
  );
}
