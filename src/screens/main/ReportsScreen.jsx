import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ICONS} from '../../constants';

const ReportsScreen = () => {
  const reports = [
    {
      id: '#1017',
      title: 'Service Report',
      date: '20,Aug 2024',
    },
    {
      id: '#1017',
      title: 'Service Report',
      date: '20,Aug 2024',
    },
    {
      id: '#1017',
      title: 'Service Report',
      date: '20,Feb 2025',
    },
  ];

  const groupedReports = reports.reduce((acc, report) => {
    if (!acc[report.date]) {
      acc[report.date] = [];
    }
    acc[report.date].push(report);
    return acc;
  }, {});

  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader 
        title="Reports"
        showBackButton={true}
      />
      
      <ScrollView className="flex-1 p-4">
        {Object.entries(groupedReports).map(([date, dateReports]) => (
          <View key={date} className="mb-6">
            <Text className="text-sm text-gray-500 mb-3 px-1">{date}</Text>
            {dateReports.map((report, index) => (
              <TouchableOpacity key={index} className="bg-white rounded-xl p-4 mb-2 shadow-sm">
                <View className="flex-row items-center">
                  <Icon name={ICONS.REPORTS} size={24} color="#B23A34" />
                  <Text className="text-base text-gray-800 font-medium ml-3">
                    {report.id} - {report.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ReportsScreen;