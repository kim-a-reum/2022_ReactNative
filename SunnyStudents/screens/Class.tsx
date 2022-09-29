import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
        <View>
          <Text>class! </Text>
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Class;
