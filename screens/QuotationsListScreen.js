import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// prod

export default function QuotationsListScreen({ route }) {
  const { title, address, parts } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Cotações Criadas</Text>
      {title && (
        <View style={styles.quotation}>
          <Text>Título: {title}</Text>
          <Text>Endereço: {address}</Text>
          <Text>Peças: {parts}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  quotation: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
