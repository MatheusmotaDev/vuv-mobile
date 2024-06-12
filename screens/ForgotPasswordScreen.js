import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// prod

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        alert('Um email foi enviado para redefinir sua senha.');
        navigation.navigate('Login');
      } else {
        alert('Usuário não encontrado!');
      }
    } catch (error) {
      alert('Erro ao recuperar os dados!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.buttonContainer}>
        <Button title="Redefinir Senha" onPress={handleResetPassword} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007AFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});
