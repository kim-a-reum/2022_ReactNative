import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Class = () => {
  return (
    <View style={styles.container}>
      <Text>Class</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Class;
