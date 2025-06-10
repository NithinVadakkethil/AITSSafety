import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    navigation.replace('LetsStart');
  };

  return (
    <View className="flex-1 bg-gray-50 justify-center px-6">
      <View className="bg-white rounded-2xl p-6 shadow-lg">
        <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</Text>
        <Text className="text-gray-500 text-base mb-8">Sign in to continue</Text>
        
        <View className="mb-4">
          <Text className="text-gray-700 text-sm font-medium mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View className="mb-6">
          <Text className="text-gray-700 text-sm font-medium mb-2">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity 
          className="bg-primary rounded-lg py-4 items-center"
          onPress={handleLogin}>
          <Text className="text-white text-base font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;