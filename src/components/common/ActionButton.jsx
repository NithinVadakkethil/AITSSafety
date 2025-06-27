import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const ActionButton = ({
  title,
  onPress,
  variant = 'primary',
  icon = null,
  className = ''
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg flex-row items-center justify-center';
  const variantClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-100 border border-gray-300'
  };

  const textClasses = {
    primary: 'text-white font-medium',
    secondary: 'text-gray-700 font-medium'
  };

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onPress={onPress}
    >
      {icon && (
        <View className="mr-2">
          {icon}
        </View>
      )}
      <Text className={textClasses[variant]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
