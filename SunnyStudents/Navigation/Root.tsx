import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./Tabs";
import Stack from "./Stacks";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
};

export default Root;
