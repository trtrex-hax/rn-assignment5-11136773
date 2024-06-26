import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardsScreen;
