/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'HOME', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'PRODUCT', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
