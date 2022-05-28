import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartProductItem from '../../components/CartProductItem/index';
import Button from '../../components/Button';

import cart from '../../data/cart';

const ShoppingCartScreen = () => {
  const subTotalPrice = () => {
    let subTotal = 0;

    cart.forEach(item => (subTotal += item.quantity * item.item.price));

    return subTotal.toFixed(2);
  };

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Subtotal ({cart.length} items):{' '}
          <Text style={{color: '#e47911'}}>${subTotalPrice()}</Text>
        </Text>
        <Button text="Proceed to checkout" onPress={() => {}} />
      </View>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {paddingTop: 15, paddingBottom: 210},
});
