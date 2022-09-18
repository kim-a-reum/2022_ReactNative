import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Class from "../screens/Class";
import Search from "../screens/Search";
import Student from "../screens/Student";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarLabelStyle: {
          color: "#696969",
          fontSize: 12.5,
        },
        tabBarStyle: { height: 85 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="강의 목록"
        component={Class}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="chalkboard-teacher" size={28} color="#FFE100" />
          ),
        }}
      />
      <Tab.Screen
        name="학생 목록"
        component={Student}
        options={{
          tabBarIcon: () => (
            <Ionicons name="people" size={33} color="#FFE100" />
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
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
