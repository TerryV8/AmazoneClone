import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface ButtonPress {
  text: String;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonPress) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    backgroundColor: '#e4a911',
    marginVertical: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: 'f4a911',
  },
  buttonText: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
