import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import 'moment/locale/pt-br';

// prod

export default function HomeScreen({ navigation }) {
  const [greeting, setGreeting] = useState('Olá');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('loggedInUser');
        if (userEmail) {
          const user = await AsyncStorage.getItem(userEmail);
          if (user) {
            const parsedUser = JSON.parse(user);
            setUserName(parsedUser.name);
          }
        }
      } catch (error) {
        console.error('Erro ao recuperar o nome do usuário:', error);
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    const currentHour = moment().hour();
    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.greeting}>{`${greeting}, ${userName}!`}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Criar Cotação</Text>
        <Button title="Criar Cotação" onPress={() => navigation.navigate('CreateQuotation')} />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Listar Cotações Criadas</Text>
        <Button title="Listar Cotações Criadas" onPress={() => navigation.navigate('QuotationsList')} />
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
    backgroundColor: '#00A8FF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginVertical: 10,
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
