import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button, StyleSheet, Linking } from 'react-native';
import api from './axios';  

const JobList = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const fetchJobs = async () => {
    try {
      const response = await api.get('/jobs');
      setJobs(response.data.jobs);
      setLoading(false);  
    } catch (error) {
      console.error('Erro ao buscar vagas:', error);
      setError('Erro ao carregar vagas'); 
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchJobs();  
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />; 
  if (error) return <Text style={styles.error}>{error}</Text>; // 
  if (jobs.length === 0) return <Text style={styles.message}>Nenhuma vaga encontrada</Text>; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Vagas</Text>
      
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { id: item.id })}>
              <Text style={styles.jobTitle}>{item.title}</Text>
            </TouchableOpacity>

            {}
            {item.status === 'aberta' && (
              <Button 
                title="Contatar" 
                onPress={() => Linking.openURL(`whatsapp://send?phone=${item.contato}`)} 
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    paddingVertical: 10,
  },
  jobItem: {
    marginBottom: 15,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default JobList;
