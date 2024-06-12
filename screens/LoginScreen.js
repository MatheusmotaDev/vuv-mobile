import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// prod

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
          await AsyncStorage.setItem('loggedInUser', email);
          navigation.navigate('Home');
        } else {
          alert('Email ou senha incorretos!');
        }
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
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Manter conectado" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Esqueci minha senha" onPress={() => navigation.navigate('ForgotPassword')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Text
        style={styles.registerLink}
        onPress={() => navigation.navigate('Register')}
      >
        Não tem uma conta? Registe-se
      </Text>
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
  registerLink: {
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
