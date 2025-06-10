import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ICONS} from '../../constants';

const CustomHeader = ({
  title,
  showBackButton = false,
  showNotificationButton = false,
  onBackPress,
  rightComponent,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };

  return (
    <View className="bg-primary pt-11 android:pt-6">
      <StatusBar backgroundColor="#B23A34" barStyle="light-content" />
      <View className="flex-row items-center justify-between px-4 py-3 min-h-[56px]">
        <View className="flex-row items-center flex-1">
          {showBackButton && (
            <TouchableOpacity 
              className="mr-4 p-1"
              onPress={handleBackPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Icon name={ICONS.BACK} size={24} color="white" />
            </TouchableOpacity>
          )}
          <Text className="text-white text-xl font-semibold flex-1">{title}</Text>
        </View>
        
        <View className="flex-row items-center">
          {showNotificationButton && (
            <TouchableOpacity 
              className="p-1"
              onPress={handleNotificationPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Icon name={ICONS.NOTIFICATIONS} size={24} color="white" />
            </TouchableOpacity>
          )}
          {rightComponent}
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;