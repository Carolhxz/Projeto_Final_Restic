import React from 'react';
import { View, Button, Alert } from 'react-native';
import { useAuth } from './AuthContext';  
const ProfileScreen = ({ navigation }) => {
  const { logout } = useAuth();  

  const handleLogout = async () => {
    try {
      await logout();  
      navigation.navigate('Login');  
    } catch (error) {
      Alert.alert('Erro', 'Erro ao realizar logout');
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
