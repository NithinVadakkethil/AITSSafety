import React from 'react';
import {View, Text} from 'react-native';
import { WorkOrderCard, CustomHeader } from '../../components';

const TaskScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader title="Task" />
      <WorkOrderCard/>
    </View>
  );
};

export default TaskScreen;