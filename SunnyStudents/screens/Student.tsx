import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const API_KEY = "609d02fc0e4f67ea6646dc7de401b14e";

const Student = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const studentData = async () => {
    const arr = [];
    for (let i = 1; i < 3; i++) {
      const { biography, ...json } = await (
        await fetch(
          `https://api.themoviedb.org/3/person/${i}?api_key=${API_KEY}&language=en-US`
        )
      ).json();
      arr.push(json);
      console.log(json);
    }
    setStudents(arr);
  };

  useEffect(() => {
    studentData();
    console.log(students);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Stack", { screen: "aaa" })}
      style={styles.container}
    >
      <View>
        {students.map((el) => (
          <Text key={el.imdb_id}>{el.birthday}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Student;
