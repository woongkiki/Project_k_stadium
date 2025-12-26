import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TabNavi from './TabNavi';
import {Provider} from 'react-redux';
import store from '../redux/configureStore';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabNavi" component={TabNavi} />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
};

export default Main;
