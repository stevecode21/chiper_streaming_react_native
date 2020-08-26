import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../components/Favorites/container/Favorites';

const Stack = createStackNavigator();
export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Recommended"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
    </Stack.Navigator>
  );
};
