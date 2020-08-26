/**
 * Libraries
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

/**
 * Stacks navigators
 */
import {StreamingsStack} from '../StacksScreens/StreamingsStack';
import {FavoritesStack} from '../StacksScreens/FavoritesStack';

// We create constant for implementing the tab navigation}
const Tab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Streamings"
        tabBarOptions={{
          inactiveTintColor: '#E8E8E8',
          activeTintColor: '#FF0136',
          showLabel: false,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenIcons(route, color),
        })}>
        <Tab.Screen name="Streamings" component={StreamingsStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
      </Tab.Navigator>
    </>
  );
};

// This function allows put an incon depending on the tab bar route
const screenIcons = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Streamings':
      iconName = 'video-input-antenna';
      break;
    case 'Favorites':
      iconName = 'cards-heart';
      break;
    default:
      break;
  }

  return (
    <Icon name={iconName} type="material-community" size={28} color={color} />
  );
};
