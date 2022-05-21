import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  console.log(selectedOption);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        style={styles.picker}
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(item => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from ${product.price}{' '}
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
      </Text>
      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button
        text="Add to Cart"
        onPress={() => {
          console.warn('AddToPCartButton');
        }}></Button>
      <Button
        text="Buy now"
        onPress={() => {
          console.warn('BuyNowButton');
        }}></Button>
    </ScrollView>
  );
};

export default ProductScreen;
