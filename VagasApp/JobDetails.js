import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; 
import api from './axios';  

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const route = useRoute(); 
  const { id } = route.params; 
  const fetchJobDetails = async () => {
    try {
      const response = await api.get(`/jobs/${id}`);
      setJob(response.data.job);
    } catch (error) {
      console.error('Erro ao buscar detalhes da vaga:', error);
    }
  };

  useEffect(() => {
    fetchJobDetails();  
  }, [id]);

  if (!job) return <ActivityIndicator size="large" color="#0000ff" />; 
  const isJobOpen = job.status === 'aberta';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Text style={styles.details}><strong>Salário:</strong> {job.salary}</Text>
      <Text style={styles.details}><strong>Localização:</strong> {job.location}</Text>

      {}
      {isJobOpen ? (
        <Button title="Contatar" onPress={() => console.log('Entrar em contato com o empregador')} />
      ) : (
        <Text style={styles.closedText}>Vaga fechada</Text>
      )}
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
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
  closedText: {
    color: 'gray',
    marginTop: 10,
    fontSize: 16,
  },
});

export default JobDetails;
