import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LetsStartScreen = () => {
  const navigation = useNavigation();

  const handleLetsStart = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="flex-1 justify-center items-center px-8">
        <View className="items-center mb-12">
          {/* Logo placeholder - you can replace with actual logo */}
          <View className="w-24 h-24 bg-primary rounded-full items-center justify-center mb-6">
            <Text className="text-white text-2xl font-bold">AITS</Text>
          </View>
          
          <Text className="text-3xl font-bold text-gray-800 mb-3 text-center">
            Welcome to AITS Safety LLC
          </Text>
          
          <Text className="text-base text-gray-500 text-center leading-6 mb-2">
            Your trusted partner for comprehensive safety solutions in the UAE
          </Text>
          
          <Text className="text-sm text-gray-400 text-center leading-5">
            Monitor services, track issues, and access reports instantly with our professional safety management system.
          </Text>
        </View>

        {/* Features Section */}
        <View className="w-full mb-12">
          <View className="flex-row items-center mb-4 px-4">
            <View className="w-2 h-2 rounded-full bg-primary mr-3" />
            <Text className="text-sm text-gray-600 flex-1">Real-time service monitoring</Text>
          </View>
          
          <View className="flex-row items-center mb-4 px-4">
            <View className="w-2 h-2 rounded-full bg-primary mr-3" />
            <Text className="text-sm text-gray-600 flex-1">Comprehensive task management</Text>
          </View>
          
          <View className="flex-row items-center mb-4 px-4">
            <View className="w-2 h-2 rounded-full bg-primary mr-3" />
            <Text className="text-sm text-gray-600 flex-1">Instant report generation</Text>
          </View>
          
          <View className="flex-row items-center px-4">
            <View className="w-2 h-2 rounded-full bg-primary mr-3" />
            <Text className="text-sm text-gray-600 flex-1">QR code scanning for equipment</Text>
          </View>
        </View>
      </View>

      {/* Bottom Section with Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity 
          className="bg-primary rounded-xl py-4 items-center shadow-lg"
          onPress={handleLetsStart}
          activeOpacity={0.8}>
          <Text className="text-white text-lg font-semibold">Let's Start</Text>
        </TouchableOpacity>
        
        <Text className="text-xs text-gray-400 text-center mt-4">
          Ready to enhance your safety management experience
        </Text>
      </View>
    </View>
  );
};

export default LetsStartScreen;