import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const API_KEY = "609d02fc0e4f67ea6646dc7de401b14e";

const ScrollView = styled.ScrollView`
  background-color: ${(props) => {
    props.theme.mainBgColor;
  }};
`;

const Students = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Class: React.FC<NativeStackScreenProps<any, "Class">> = () => {
  const ourStudents = () => {
    const result = fetch(
      `https://api.themoviedb.org/3/person/1?api_key=${API_KEY}&language=en-US`
    );
    console.log(result);
  };
  return (
    <View>
      <ScrollView>
        <Swiper
          loop
          timeout={1}
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
