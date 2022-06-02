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
import {Text, View, SafeAreaView, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <View style={{backgroundColor: 'lightblue'}}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 13,
          margin: 20,
          height: 40,
        }}>
        <Ionicons
          name="search"
          size={30}
          style={{
            justifyContent: 'center',
            marginLeft: 9,
            marginTop: 5,
            backgroundColor: 'white',
          }}
        />
        <TextInput
          style={{
            marginRight: 10,
            backgroundColor: 'white',
            paddingRight: 10,
            flex: 1,
          }}
          placeholder="Search ..."></TextInput>
      </View>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'PRODUCT', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
