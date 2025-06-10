import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/common/CustomHeader';

const TaskScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader title="Task" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-gray-800">Task Screen</Text>
      </View>
    </View>
  );
};

export default TaskScreen;