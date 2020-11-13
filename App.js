import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {LoggedStack} from './src/navigation/StacksScreens/LoggedStack';
import {UnloggedStack} from './src/navigation/StacksScreens/UnloggedStack';
import {GlobalContext} from './src/context/store/GlobalContext';
import userReducer from './src/context/reducers/user.reducer';

const App = () => {
  const [stateUser, dispatch] = useReducer(userReducer, {
    isAuthenticated: true,
    user: {},
  });
  return (
    <GlobalContext.Provider value={{stateUser, dispatch}}>
      <NavigationContainer>
        {!stateUser.isAuthenticated ? <UnloggedStack /> : <LoggedStack />}
      </NavigationContainer>
    </GlobalContext.Provider>
  );
};

export default App;
