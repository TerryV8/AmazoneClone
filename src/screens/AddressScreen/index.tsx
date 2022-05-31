import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartProductItem from '../../components/CartProductItem/index';
import Button from '../../components/Button';
import ProductItem from '../../components/ProductItem';
const countryList = require('country-list');

const AddressScreen = () => {
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  const [fullNameError, setFullNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  const validateForm = () => {
    if (fullName === '') {
      setFullNameError(true);
      setGeneralError(true);
    } else {
      setFullNameError(false);
    }

    var phoneNumberFormat = /^\d+$/;
    if (
      phoneNumber === '' ||
      !phoneNumber.match(phoneNumberFormat) ||
      phoneNumber.length < 8
    ) {
      setPhoneNumberError(true);
      setGeneralError(true);
    } else {
      setPhoneNumberError(false);
    }

    if (address === '') {
      setAddressError(true);
      setGeneralError(true);
    }
    if (zipCode === '') {
      setZipCodeError(true);
      setGeneralError(true);
    }
    if (city === '') {
      setCityError(true);
      setGeneralError(true);
    }
  };

  const validateAddress = () => {};

  return (
    <ScrollView style={styles.page}>
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Country :
        </Text>
        <Picker
          style={styles.picker}
          selectedValue="FR"
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
          Full Name (First & Last name) :
        </Text>
        {fullNameError && (
          <Text style={{color: 'red'}}>The full name field is required *</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="John DO"
          value={fullName}
          onChangeText={fullName => {
            setFullName(fullName);
            setFullNameError(false);
            setGeneralError(false);
          }}></TextInput>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Phone Number :
        </Text>
        {phoneNumberError && (
          <Text style={{color: 'red'}}>Fill a right phone number *</Text>
        )}
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="0033680853030"
          value={phoneNumber}
          onChangeText={phoneNumber => {
            setPhoneNumber(phoneNumber);
            setPhoneNumberError(false);
            setGeneralError(false);
          }}></TextInput>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Address :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="30 avenue charles de Gaulles"
          value={address}
          onChangeText={setAddress}></TextInput>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          Zip code :
        </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="75016"
          value={zipCode}
          onChangeText={setZipCode}></TextInput>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          City :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Paris"
          value={city}
          onChangeText={setCity}></TextInput>
        {generalError && (
          <Text style={{color: 'red'}}>Some fields are not well filled</Text>
        )}
        <Button
          text="Checkout"
          onPress={() => {
            validateForm();
          }}
        />
        <Text></Text>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'lightgrey',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 15,
    paddingBottom: 40,
  },
  picker: {
    marginTop: 4,
    backgroundColor: 'white',
    height: 36,
    marginBottom: 11,
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
    marginBottom: 12,
    marginTop: 4,
  },
});
