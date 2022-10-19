import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { makeStudentImg } from "../utils";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";

const StudentImg = styled.Image`
  width: 200px;
  height: 200px;
`;
const Scroll = styled.ScrollView`
  width: 100%;
  height: 200px;
`;
const ScrollWrapper = styled.View`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: row;
`;
const StudentDetail = styled.View`
  width: 200px;
  height: 200px;
  background-color: GRAY;
  padding: 20px;
`;
const DetailContents = styled.Text`
  size: 13px;
`;
const API_KEY = "609d02fc0e4f67ea6646dc7de401b14e";

const Student = () => {
  const [students, setStudents] = useState([]);
  const studentData = async () => {
    const arr = [];
    for (let i = 1; i < 10; i++) {
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
    <View>
      <Scroll horizontal>
        {students.map((el) => (
          <ScrollWrapper key={el.imdb_id}>
            <StudentImg source={{ uri: makeStudentImg(el.profile_path) }} />
            <StudentDetail>
              <DetailContents> 이름 : {el.name}</DetailContents>
            </StudentDetail>
          </ScrollWrapper>
        ))}
      </Scroll>
    </View>
  );
};

export default Student;
