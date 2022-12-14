import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { YELLOW } from "../color";
import Class from "../screens/Class";
import Search from "../screens/Search";
import Student from "../screens/Student";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTintColor: YELLOW,
      }}
    >
      <NativeStack.Screen name="Class" component={Class} />
      <NativeStack.Screen name="Student" component={Student} />
      <NativeStack.Screen name="Search" component={Search} />
    </NativeStack.Navigator>
  );
};

export default Stack;
