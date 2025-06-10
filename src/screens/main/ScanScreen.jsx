import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/common/CustomHeader';

const ScanScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader title="Scan" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-gray-800">Scan Screen</Text>
      </View>
    </View>
  );
};

export default ScanScreen;