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
import ShoppingCartStack from './router/ShoppingCartStack';

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
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user-o';
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === 'Shopping Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Others') {
              iconName = focused
                ? 'md-reorder-three-sharp'
                : 'md-reorder-three-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{title: 'Home', headerTitleAlign: 'center'}}
        />
        <Tab.Screen name="Shopping Cart" component={ShoppingCartStack} />
        <Tab.Screen name="Profile" component={AddressScreen} />
        <Tab.Screen name="Others" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
