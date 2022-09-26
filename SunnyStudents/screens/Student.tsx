import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Student = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Stack", { screen: "Three" })}
      style={styles.container}
    >
      <Text>Student</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Student;
