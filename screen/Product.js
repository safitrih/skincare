import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ganti "FontAwesome" dengan ikon yang sesuai

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="shopping-bag" size={60} style={styles.icon} /> {/* Ganti "shopping-bag" dengan ikon yang sesuai */}
      <Text style={styles.title}>Skincer Products</Text>
      <View style={styles.productList}>
        {/* Tambahkan daftar produk Skincer di sini */}
        <Text>Product 1</Text>
        <Text>Product 2</Text>
        <Text>Product 3</Text>
      </View>
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FF5733', // Warna ikon
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productList: {
    marginTop: 20,
  },
});

export default Product;