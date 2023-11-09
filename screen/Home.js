import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <View>
      <Icon name="home" size={50} /> {/* Ganti "home" dengan ikon yang sesuai */}
      <Text>Welcome to Skincer Shop!</Text>
      {}
      <Button title="Go to Products" onPress={() => navigation.navigate('Product')} />
    </View>
  );
}

export default Home;