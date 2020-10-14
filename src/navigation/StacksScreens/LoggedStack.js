import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigation} from '../Navigation';
import VideoStramings from '../../components/VideoStreamings/container/VideoStreamings';
import Profile from '../../components/Profile/container/Profile';

const Stack = createStackNavigator();
export const LoggedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Recommended"
        component={Navigation}
        options={{title: 'Recommended'}}
      />
      <Stack.Screen
        name="VideoStreamings"
        component={VideoStramings}
        options={{title: 'Videostreamings'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};
