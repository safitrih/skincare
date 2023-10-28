import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ganti "FontAwesome" dengan ikon yang sesuai

const Product = ({ navigation }) => {
  return (
    <View>
      <Icon name="shopping-bag" size={50} /> {/* Ganti "shopping-bag" dengan ikon yang sesuai */}
      <Text>Skincer Products</Text>
      {/* Tambahkan daftar produk Skincer di sini */}
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

export default Product;