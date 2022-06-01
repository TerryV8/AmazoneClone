/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import AddressScreen from './src/screens/AddressScreen';

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStack from './router/HomeStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createBottomTabNavigator();

  //const HomeScreen = () => {
  //  return <HomeScreen />;
  //};

  //    <SafeAreaView style={backgroundStyle}>    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //<NavigationContainer>
  //<Tab.Navigator>
  //<Tab.Screen name="Home" component={HomeScreen} />
  // </Tab.Navigator>
  //</NavigationContainer>
  //    </SafeAreaView>

  //  return (
  //    <SafeAreaView style={backgroundStyle}>
  //      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //      <HomeScreen />
  //    </SafeAreaView>
  //  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Product') {
              iconName = focused ? 'rocket' : 'rocket-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'ShoppingCart') {
              iconName = focused ? 'cart' : 'cart-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Address') {
              iconName = focused ? 'address-card' : 'address-card-o';
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
        <Tab.Screen name="Address" component={AddressScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
