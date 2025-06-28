import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/common/CustomHeader";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ICONS } from "../../constants";
import { Avatar, JobCountBg } from "../../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleViewAllPress = () => {
    navigation.navigate("TaskOverview");
  };
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader
        title="AITS Safty LLC"
        showNotificationButton={true}
        rightComponent={
          <TouchableOpacity className="ml-3">
            <Avatar width={24} height={24} />
          </TouchableOpacity>
        }
      />

      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-gray-header -tracking-tight mb-1">
          Welcome back!
        </Text>
        <Text className="text-sm text-gray-subtext mb-6">
          Monitor services, track issues, and access reports instantly.
        </Text>

        {/* Today's Job Card */}
        <View className="bg-white rounded-xl p-5 mb-4 flex-row justify-between items-center shadow-sm">
          <View>
            <Text className="text-base font-semibold text-gray-header">
              Today's
            </Text>
            <Text className="text-base font-semibold text-gray-header">
              Assigned Job
            </Text>
          </View>

          {/* Right Side */}
          <View className="relative justify-center items-center">
            {/* Background with no padding impact */}
            <View className="absolute -top-4">
              <JobCountBg />
            </View>

            {/* Count Text centered on top of background */}
            <Text className="text-4xl font-extrabold text-primary">12</Text>
          </View>
        </View>

        {/* Task Overview Card */}
        <View className="bg-white rounded-xl p-5 mb-4 shadow-sm">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-lg font-semibold text-gray-800">
              Task Overview
            </Text>
            <View className="flex-row items-center">
              <Icon name={ICONS.FILTER} size={16} color="#B23A34" />
              <Text className="text-sm text-primary mx-1">Last 2 Weeks</Text>
              <Icon name={ICONS.ARROW_DOWN} size={16} color="#B23A34" />
            </View>
          </View>

          <View className="items-center mb-5">
            <Text className="text-4xl font-bold text-gray-800">24</Text>
            <Text className="text-sm text-gray-500">Task in Total</Text>
          </View>

          <View className="space-y-2">
            <View className="flex-row justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                <Text className="text-xs text-gray-500">Completed 35%</Text>
              </View>
              <View className="flex-row items-center flex-1">
                <View className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                <Text className="text-xs text-gray-500">On Progress 12%</Text>
              </View>
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                <Text className="text-xs text-gray-500">Assigned 10%</Text>
              </View>
              <View className="flex-row items-center flex-1">
                <View className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                <Text className="text-xs text-gray-500">Pending 45%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tasks Section */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-800">Tasks</Text>
            <TouchableOpacity
              onPress={handleViewAllPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text className="text-sm text-blue-500 font-medium">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center mb-2">
              <Icon name={ICONS.LOCATION} size={16} color="#B23A34" />
              <Text className="text-xs text-gray-500 ml-1">Next schedule</Text>
            </View>
            <Text className="text-base font-semibold text-blue-500 mb-1">
              WO24568
            </Text>
            <Text className="text-sm text-gray-800 mb-4">
              Replacement of smoke detector
            </Text>

            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-xs text-gray-500 flex-1">
                  Client Name
                </Text>
                <Text className="text-xs text-gray-800 flex-2 text-right">
                  Ling yu logistics
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-gray-500 flex-1">Site Name</Text>
                <Text className="text-xs text-gray-800 flex-2 text-right">
                  Box No. 113554, Dubai,11355
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
