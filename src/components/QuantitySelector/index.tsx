import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1a1a1',
    width: 110,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {margin: 5, fontSize: 18},
  quantity: {margin: 5, color: '#007eb9'},
});
