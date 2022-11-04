import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Text, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const ScrollView = styled.ScrollView``;

const ClassImg = styled.Image`
  /* background-position: top; */
  width: 100%;
  height: 80%;
`;
const ClassDetail = styled.Text`
  text-align: center;
  padding: 0.5%;
  font-size: 18px;
  font-family: "Times New Roman";
  font-weight: 600;

  background-color: lightgray;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ClassBox = styled.View`
  display: flex;
  flex-direction: column;
`;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ClassData = {
  "핵심 쏙! 부동산 경매 실전강의":
    "토지, 매물, 건물의 경매 중급 코스입니다. 행정 업무부터 실전 문서 작성법까지! ",
  "빠져드는 온라인 마케팅 톡톡":
    "온라인 마케팅의 모든것 , 원리를 알면 빠져드는 이유를 파악할 수 있다! ",
  "전교 1등의 노트필기법 [비법노트 제공]":
    "키워드 정리하기, 핵심 요약하기부터 디테일 살리기까지! ",
  "쿡쿡 오븐없이 가능한 베이킹 12종 모음":
    "베이킹 초보를 위한 계량법, 재료 구분법, 실습까지 총 12개의 종류 실습!",
  "시니의 스트레스 완화를 위한 평온한 마음 다스리는법":
    "현대인의 불안과 긴장, 스트레스를 완화할 수 있는 심리학부터 마음수련법까지 함께 알아보아요",
  "똑부러지는 발표를 위한 스피치강의":
    "발표, 면접등 스피치 방법부터 자기PR까지 코칭 받아보자",
  "[무료강의 3강] 집중이 필요한 순간, 몰입도 집중법 강의":
    "집중이 필요할때, 일의 능률을 위한 집중법 초급부터 심화까지",
};
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
          controlsEnabled={false}
          containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
        >
          {/* swiper 스와이핑 효과가 싫다면 react-native-swiper를 쓰자  */}
          <ClassBox>
            <ClassImg source={require("../img/class1.png")} />
            <ClassDetail> 📚 부동산 경매 완전 정복하기!</ClassDetail>
          </ClassBox>
          <ClassBox>
            <ClassImg source={require("../img/class2.png")} />
            <ClassDetail>마케팅이란 무엇인가? 🎁 쏙쏙 완벽 가이드!</ClassDetail>
          </ClassBox>
          <ClassBox>
            <ClassImg source={require("../img/class3.png")} />
            <ClassDetail> 🖊 무작정하는 필기는 그만! </ClassDetail>
          </ClassBox>
        </Swiper>
      </ScrollView>
      <Text>강의목록부분입니다</Text>
    </View>
  );
};

export default Class;
