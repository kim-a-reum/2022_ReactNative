import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Class from "../screens/Class";
import Search from "../screens/Search";
import Student from "../screens/Student";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { GRAY, YELLOW } from "../color";
import Stack from "./Stacks";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  // 유저가 다크모드인지 확인하자
  const isdarkmode = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12.5,
          fontWeight: "600",
          marginTop: -5,
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: isdarkmode ? GRAY : "white",
        },
        tabBarActiveTintColor: isdarkmode ? YELLOW : "black",
        tabBarInactiveTintColor: isdarkmode ? "white" : GRAY,
        headerStyle: {
          backgroundColor: isdarkmode ? YELLOW : "white",
        },
      }}
    >
      <Tab.Screen
        name="강의 목록"
        component={Class}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="chalkboard-teacher"
              size={size}
              color={focused ? YELLOW : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="학생 목록"
        component={Student}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="people"
              size={33}
              color={focused ? YELLOW : color}
            />
          ),

          tabBarBadge: "5",
          tabBarBadgeStyle: {
            width: 20,
            height: 15,
            paddingBottom: 18,
            marginLeft: 4,
          },
        }}
      />
      <Tab.Screen
        name="통합 검색"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? YELLOW : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
