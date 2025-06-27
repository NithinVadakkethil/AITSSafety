import React from 'react';
import { View, Text } from 'react-native';

const TechnicianAvatar = ({ name, size = 22 }) => {
  // Extract initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <View
      className="rounded-full border border-white items-center justify-center bg-gray-300"
      style={{ width: size, height: size }}
    >
      <Text className="text-xs font-medium text-gray-700">
        {getInitials(name)}
      </Text>
    </View>
  );
};

export default TechnicianAvatar;
