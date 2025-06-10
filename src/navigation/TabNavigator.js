import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen, TaskScreen, ScanScreen, ReportsScreen, HistoryScreen} from '../screens/main';
import {ICONS, COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          const iconSize = 24;

          switch (route.name) {
            case 'Home':
              iconName = ICONS.HOME;
              break;
            case 'Task':
              iconName = ICONS.TASK;
              break;
            case 'Scan':
              iconName = ICONS.SCAN;
              break;
            case 'Reports':
              iconName = ICONS.REPORTS;
              break;
            case 'History':
              iconName = ICONS.HISTORY;
              break;
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray400,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 8,
          shadowOffset: {width: 0, height: -2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;