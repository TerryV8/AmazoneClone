import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 6,
    borderWidth: 1,
    borderColor: '#fefefe',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {flex: 2, height: 150, resizeMode: 'contain'},
  rightContainer: {padding: 10, flex: 3},

  title: {fontSize: 18, color: 'black'},
  ratingsContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    color: 'black',
  },
  star: {margin: 2},
  price: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: '#992600',
  },
});

export default styles;
