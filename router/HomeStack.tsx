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
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  search: string;
  setSearch: () => void;
}

const HeaderComponent = ({search, setSearch}: HeaderComponentProps) => {
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
          placeholder="Search ..."
          value={search}
          onChangeText={setSearch}></TextInput>
      </View>
    </View>
  );
};

const HomeStack = () => {
  const [search, setSearch] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent search={search} setSearch={setSearch} />,
      }}>
      <Stack.Screen name="Home">
        {() => <HomeScreen search={search}></HomeScreen>}
      </Stack.Screen>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'PRODUCT', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
