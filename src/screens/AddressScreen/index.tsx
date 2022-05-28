import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartProductItem from '../../components/CartProductItem/index';
import Button from '../../components/Button';
import ProductItem from '../../components/ProductItem';
const countryList = require('country-list');

const AddressScreen = () => {
  const [country, setCountry] = useState('US');
  const [fullName, setFullName] = useState('John DO');
  const [phoneNumber, setPhoneNumber] = useState('+33680853030');

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Country
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={country}
          onValueChange={item => setCountry(item)}>
          {countryList.getData().map(country => (
            <Picker.Item
              key={country.code}
              label={country.name}
              value={country.code}
            />
          ))}
        </Picker>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Full Name (First & Last name)
        </Text>
        <TextInput
          style={styles.input}
          placeholder={fullName}
          value={fullName}
          onChangeText={setFullName}></TextInput>

        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Phone Number
        </Text>
        <TextInput
          style={styles.input}
          placeholder={phoneNumber}
          value={phoneNumber}
          onChangeText={setPhoneNumber}></TextInput>

        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Address
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          City
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          State
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Zip code
        </Text>
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'lightgrey',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 15,
    paddingBottom: 30,
  },
  picker: {
    backgroundColor: 'white',
    height: 36,
    marginBottom: 10,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#aaa',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: 50,
    borderColor: '#aaa',
    borderRadius: 3,
    marginLeft: 4,
    paddingLeft: 16,
    marginBottom: 10,
    marginTop: 3,
  },
});
