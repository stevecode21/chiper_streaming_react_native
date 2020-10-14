import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../components/Login/container/Login';
const Stack = createStackNavigator();
export const UnloggedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
