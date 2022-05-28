import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: String;
    quantity: number;
    option?: String;
    item: {
      id: String;
      title: String;
      image: String;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const onDelete = () => {
    //ACTION TO DELETE
  };

  const item = cartItem.item;
  const quantityProp = cartItem.quantity;
  const [quantity, setQuantity] = useState(Number(quantityProp));
  return (
    <View style={styles.root}>
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
        <View style={styles.rowQuantitySelector}>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

          <Pressable style={styles.deleteButton} onPress={onDelete}>
            <Text>Delete</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartProductItem;
