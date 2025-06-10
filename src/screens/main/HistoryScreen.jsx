import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ICONS} from '../../constants';

const HistoryScreen = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  const historyItems = [
    {
      id: '#1017',
      boxNo: 'Box No. 113554, Dubai,11355',
      building: 'Building no : B1',
      areaCode: 'Area code B105',
      jobType: 'AMC',
      equipment: 'Fireproof Cabinets',
      time: '3:45 PM',
      status: 'completed',
    },
    {
      id: '#1018',
      boxNo: 'Box No. 113554, Dubai,11355',
      building: 'Building no : B1',
      areaCode: 'Area code B105',
      jobType: 'AMC',
      equipment: 'Fireproof Cabinets',
      time: '3:45 PM',
      status: 'completed',
    },
    {
      id: '#1019',
      boxNo: 'Box No. 113554, Dubai,11355',
      building: 'Building no : B1',
      areaCode: 'Area code B105',
      jobType: 'AMC',
      equipment: 'Fireproof Cabinets',
      time: '3:45 PM',
      status: 'completed',
    },
    {
      id: '#1020',
      boxNo: 'Box No. 113554, Dubai,11355',
      building: 'Building no : B1',
      areaCode: 'Area code B105',
      jobType: 'AMC',
      equipment: 'Fireproof Cabinets',
      time: '3:45 PM',
      status: 'completed',
    },
  ];

  const FilterButton = () => (
    <TouchableOpacity 
      className="flex-row items-center px-3 py-1"
      onPress={() => setShowFilter(!showFilter)}>
      <Icon name={ICONS.FILTER} size={16} color="#B23A34" />
      <Text className="text-primary text-sm ml-1">Filter</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader 
        title="History"
        showBackButton={true}
        rightComponent={<FilterButton />}
      />
      
      <ScrollView className="flex-1 p-4">
        {historyItems.map((item, index) => (
          <TouchableOpacity key={index} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <View className="flex-row items-center">
                <View className="w-3 h-3 rounded-full bg-green-400 mr-2" />
                <Text className="text-base font-semibold text-gray-800">{item.id}</Text>
              </View>
              <Text className="text-sm text-gray-500">{item.time}</Text>
            </View>
            
            <Text className="text-sm font-medium text-gray-800 mb-1">{item.boxNo}</Text>
            <Text className="text-xs text-gray-500 mb-3">
              {item.building} | {item.areaCode}
            </Text>
            
            <View className="flex-row space-x-6">
              <View className="flex-1">
                <Text className="text-xs text-gray-500 mb-1">Job Type</Text>
                <Text className="text-sm font-medium text-gray-800">{item.jobType}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 mb-1">Equipment</Text>
                <Text className="text-sm font-medium text-gray-800">{item.equipment}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;