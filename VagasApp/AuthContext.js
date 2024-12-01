import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const loadUserData = async () => {
    const storedUser = await AsyncStorage.getItem('@user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const login = async (userData) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(userData));  
      setUser(userData);  
    } catch (e) {
      console.error("Erro ao armazenar dados do usuário", e);
    }
  };
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user');  
      setUser(null);  
    } catch (e) {
      console.error("Erro ao remover dados do usuário", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}  {}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;  
};
