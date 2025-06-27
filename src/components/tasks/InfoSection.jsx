import React from 'react';
import { View, Text } from 'react-native';

const InfoSection = ({
  label,
  value,
  icon = null,
  layout = 'vertical',
  labelClassName = '',
  valueClassName = ''
}) => {
  if (layout === 'horizontal') {
    return (
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {icon && (
            <View className="mr-2">
              {icon}
            </View>
          )}
          <Text className={`text-gray-600 text-sm ${labelClassName}`}>
            {label}
          </Text>
        </View>
        <Text className={`text-gray-900 text-sm font-medium ${valueClassName}`}>
          {value}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <View className="flex-row items-center mb-1">
        {icon && (
          <View className="mr-2">
            {icon}
          </View>
        )}
        <Text className={`text-gray-600 text-sm ${labelClassName}`}>
          {label}
        </Text>
      </View>
      <Text className={`text-gray-900 text-sm font-medium ${valueClassName}`}>
        {value}
      </Text>
    </View>
  );
};

export default InfoSection;
