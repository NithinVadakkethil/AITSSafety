import React from 'react';
import { View, Text } from 'react-native';
import TechnicianAvatar from './TechnicianAvatar';

const JobListItem = ({
  jobTitle,
  jobNumber,
  zone,
  technicianName,
  status
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600';
      case 'on progress':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-start mb-2">
        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="text-gray-900 text-sm font-medium flex-1">
              {jobTitle}
            </Text>
            <Text className="text-gray-600 text-sm ml-2">
              {jobNumber}
            </Text>
          </View>
          <Text className="text-gray-600 text-xs">
            {zone}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <TechnicianAvatar name={technicianName} size={21} />
          <Text className="text-gray-900 text-sm ml-2">
            {technicianName}
          </Text>
        </View>
        <Text className={`text-sm font-medium ${getStatusColor(status)}`}>
          {status}
        </Text>
      </View>
    </View>
  );
};

export default JobListItem;
