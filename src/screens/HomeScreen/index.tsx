import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../components/ProductItem/index';

import products from '../../data/products';

const HomeScreen = ({search}: {search: String}) => {
  console.log(search);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {},
});
