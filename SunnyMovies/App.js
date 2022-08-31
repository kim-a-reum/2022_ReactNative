import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

export default function App() {
  const [start, setStart] = useState(false);
  const onStart = () => setStart(true);
  const startLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  };
  if (!start) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onStart}
        onError={console.error}
      />
    );
  }
  return <Text>로딩이 되었다 </Text>;
}
