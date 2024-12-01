import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from './axios';  

const AddJob = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    const newJob = {
      title,
      description,
      salary,
      location,
    };

    try {
      const response = await api.post('/jobs', newJob);
      Alert.alert('Sucesso', 'Vaga adicionada com sucesso!');
      setTitle('');
      setDescription('');
      setSalary('');
      setLocation('');
      navigation.goBack(); 
    } catch (error) {
      console.error('Erro ao adicionar vaga:', error);
      Alert.alert('Erro', 'Não foi possível adicionar a vaga');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Vaga</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        required
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        required
      />

      <TextInput
        style={styles.input}
        placeholder="Salário"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
        required
      />

      <TextInput
        style={styles.input}
        placeholder="Localização"
        value={location}
        onChangeText={setLocation}
        required
      />

      <Button title="Adicionar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AddJob;
