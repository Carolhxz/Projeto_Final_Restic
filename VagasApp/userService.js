import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${'http://localhost:3000'}/login`, { email, senha });
    return response.data; 
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const register = async (nome, email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { nome, email, senha });
    return response.data; 
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${'http://localhost:3000'}/usuarios`); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};


