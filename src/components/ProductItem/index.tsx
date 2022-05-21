import {View, Text, Image, ScrollView} from 'react-native';
import styles from './style';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
  const {item} = props;
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}></Image>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainers}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
              style={styles.star}></FontAwesome>
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          From ${item.price}{' '}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
