import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Text, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const API_KEY = "609d02fc0e4f67ea6646dc7de401b14e";

const ScrollView = styled.ScrollView``;

const Students = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Class: React.FC<NativeStackScreenProps<any, "Class">> = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const studentData = async () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const { biography, ...json } = await (
        await fetch(
          `https://api.themoviedb.org/3/person/${i}?api_key=${API_KEY}&language=en-US`
        )
      ).json();
      arr.push(json);
    }
    setStudents(arr);
    setLoading(false);
  };

  useEffect(() => {
    studentData();
    console.log(students);
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <View>
      <ScrollView>
        <Swiper
          loop
          // timeout={2}
          controlsEnabled={false}
          containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
        >
          <Students style={{ backgroundColor: "red" }} />
          <Students style={{ backgroundColor: "yellow" }} />
          <Students style={{ backgroundColor: "blue" }} />
          <Students style={{ backgroundColor: "green" }} />
        </Swiper>
      </ScrollView>
    </View>
  );
};

export default Class;
