import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Class = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Class</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Class;
