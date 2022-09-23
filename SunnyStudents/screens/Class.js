import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;
const Class = () => {
  return (
    <Wrapper>
      <Text>여기야! class </Text>
    </Wrapper>
  );
};

export default Class;
