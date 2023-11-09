import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Data produk skincare (contoh data statis)
const skincareData = [
  {
    id: '1',
    name: 'Cleanser',
    description: 'A gentle cleanser for daily use.',
  },
  {
    id: '2',
    name: 'Moisturizer',
    description: 'Hydrates and nourishes your skin.',
  },
  {
    id: '3',
    name: 'Sunscreen',
    description: 'Provides UV protection for your skin.',
  },
  // Tambahkan produk skincare lainnya
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skincare Products</Text>
      <FlatList
        data={skincareData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedProduct && (
        <View style={styles.productDetail}>
          <Text style={styles.productDetailTitle}>{selectedProduct.name}</Text>
          <Text>{selectedProduct.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productName: {
    fontSize: 18,
  },
  productDetail: {
    marginTop: 20,
  },
  productDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;