import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './AuthContext';  
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';  
import ProfileScreen from './ProfileScreen';  
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

const AuthNavigator = () => {
  const { user } = useAuth();  

  return (
    <Stack.Navigator initialRouteName={user ? 'HomeScreen' : 'LoginScreen'}>
      {user ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default App;
