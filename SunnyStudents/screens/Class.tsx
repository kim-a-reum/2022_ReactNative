import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Text, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const ScrollView = styled.ScrollView``;

const CampClass = styled.Image`
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          timeout={2}
          controlsEnabled
          containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
        >
          <CampClass
            source={require("../img/class1.png")}
            style={{ width: "100%" }}
          />
          <CampClass
            source={require("../img/class2.png")}
            style={{ width: "100%" }}
          />
          <CampClass
            source={require("../img/class3.png")}
            style={{ width: "100%" }}
          />
        </Swiper>
      </ScrollView>
      <Text>강의목록부분입니다</Text>
    </View>
  );
};

export default Class;
