import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  TaskScreen,
  ScanScreen,
  ReportsScreen,
  HistoryScreen,
} from "../screens";
import { ICONS, COLORS } from "../constants";
import { History, Home, Scan, Reports, Task } from "../assets";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const iconSize = 20;

          const icons = {
            Home: <Home width={iconSize} height={iconSize} fill={color} />,
            Task: <Task width={iconSize} height={iconSize} fill={color} />,
            Scan: <Scan width={iconSize} height={iconSize} fill={color} />,
            Reports: (
              <Reports width={iconSize} height={iconSize} fill={color} />
            ),
            History: (
              <History width={iconSize} height={iconSize} fill={color}/>
            ),
          };

          return icons[route.name];
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray400,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 8,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
