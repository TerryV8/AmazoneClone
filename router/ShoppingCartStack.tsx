/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartScreen from '../src/screens/ShoppingCartScreen';
import AddressScreen from '../src/screens/AddressScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  search: string;
  setSearch: () => void;
}

const ShoppingCartStack = () => {
  const [search, setSearch] = useState('');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shopping Cart"
        component={ShoppingCartScreen}
        options={{title: 'SHOPPING CART', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{title: 'ADDRESS', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
