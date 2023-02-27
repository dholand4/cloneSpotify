import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  justify-content: center;
  border-radius: 50px;
  background-color: ${theme.colors.gray_second};
  margin-left: 10px;
`;

export const ContainerText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  margin-left: 15px;
  margin-right: 15px;
`;
