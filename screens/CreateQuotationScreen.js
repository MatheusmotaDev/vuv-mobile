import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// prod

export default function CreateQuotationScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [parts, setParts] = useState('');

  const handleSaveQuotation = () => {
    
    navigation.navigate('QuotationsList', { title, address, parts }); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título da Cotação"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Peças"
        value={parts}
        onChangeText={setParts}
      />
      <Button title="Salvar Cotação" onPress={handleSaveQuotation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
