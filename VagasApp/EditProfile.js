import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a43-170-245-161-245.ngrok-free.app',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    
    api.get('/user/profile')  
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.error("Erro ao carregar os dados do usuário", error);
      });
  }, []);

  const handleSave = () => {
    api.put('/user/profile', { name, email })  
      .then(response => {
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao salvar os dados');
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
