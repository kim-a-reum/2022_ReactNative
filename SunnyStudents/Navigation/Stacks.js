import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ScreenOne = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Two")}>
    <View>
      <Text>Screen1</Text>
    </View>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Three")}>
    <View>
      <Text>Screen2</Text>
    </View>
  </TouchableOpacity>
);
const ScreenThree = () => (
  <View>
    <Text>Screen3</Text>
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;
