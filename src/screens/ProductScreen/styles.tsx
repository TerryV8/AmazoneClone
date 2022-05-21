import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {padding: 20},
  price: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  title: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  picker: {
    backgroundColor: '#aaaaaa',
    borderColor: '#aaaaaa',
    marginVertical: 10,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: '#992600',
  },
  description: {color: 'black', marginVertical: 10, lineHeight: 19},
});

export default styles;
