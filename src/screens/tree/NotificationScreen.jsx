import { View, Text } from "react-native";
import React from "react";
import { CustomHeader } from "../../components";

const NotificationScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader title="Notification" showBackButton={true} />
    </View>
  );
};

export default NotificationScreen;
