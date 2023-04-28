import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../theme';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={theme.palette.secondary.dark} />
      <TextInput
        placeholder="Buscar capacitações, profissionais..."
        style={styles.textInput}
        value={searchTerm}
        onChangeText={handleChange}
        placeholderTextColor={theme.palette.secondary.main}
      />
    </View>
  );
};

export default SearchBar;
