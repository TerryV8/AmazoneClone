import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartProductItem from '../../components/CartProductItem/index';

import cart from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {},
});
