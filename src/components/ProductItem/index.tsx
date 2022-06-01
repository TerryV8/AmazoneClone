import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import styles from './style';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface ProductItemProps {
  item: {
    id: String;
    title: String;
    image: String;
    avgRating: Number;
    ratings: Number;
    price: Number;
    oldPrice?: Number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const navigation = useNavigation();
  const {item} = props;
  return (
    <Pressable
      style={styles.root}
      onPress={() => {
        console.log(item.id.toString());
        navigation.navigate('ProductScreen', {id: item.id});
      }}>
      <Image
        style={styles.image}
        source={{
          uri: String(item.image ? item.image : ''),
        }}></Image>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainers}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              name={i < Math.floor(Number(item.avgRating)) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
              style={styles.star}></FontAwesome>
          ))}
          <Text>{String(item.ratings)}</Text>
        </View>
        <Text style={styles.price}>
          From ${item.price}{' '}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
