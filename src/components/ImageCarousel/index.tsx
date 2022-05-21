import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ImageBackgroundBase,
} from 'react-native';

const ImageCarousel = ({images}: {images: [String]}) => {
  const windowWidth = useWindowDimensions().width;

  const [activeIndex, setActiveIndex] = useState(0);

  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems != null) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        horizontal
        snapToInterval={windowWidth - 40}
        decelerationRate={'fast'}
        snapToAlignment={'center'}
        data={images}
        renderItem={({item, index}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{
              uri: item,
            }}
            key="{{item} - {index}}"
          />
        )}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        onViewableItemsChanged={onFlatListUpdate}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={
              index === activeIndex
                ? [styles.dot, {backgroundColor: 'black'}]
                : [styles.dot, {backgroundColor: 'white'}]
            }
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1a1a1',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  image: {height: 250, resizeMode: 'contain'},
  dot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    backgroundColor: 'grey',
    borderRadius: 25,
    margin: 5,
  },
  dots: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
});
