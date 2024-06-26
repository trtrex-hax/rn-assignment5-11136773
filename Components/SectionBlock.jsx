import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';

const SectionBlock = ({ iconName, label }) => {
  const { colors, isDarkTheme } = useContext(ThemeContext);

  return (
    <>
    <View>
       <View style={[styles.imageContainer, { backgroundColor: isDarkTheme ? '#08192D' : '#f1f1f1' }]}>
      <Ionicons name={iconName} size={30} color={colors.textColor} />
    </View>
    <Text style={[{marginLeft: 25}, { color: colors.textColor }]}>{label}</Text>
    </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    margin: 5,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default SectionBlock;
