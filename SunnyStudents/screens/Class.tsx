import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.theme.mainBgColor};
`;

const Class = ({ navigation }) => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Text>여기야! class </Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Class;
