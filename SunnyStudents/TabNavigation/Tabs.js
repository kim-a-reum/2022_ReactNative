import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Class from "../screens/Class";
import Search from "../screens/Search";
import Student from "../screens/Student";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Class" component={Class} />
    <Tab.Screen name="Student" component={Student} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
