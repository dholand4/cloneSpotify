import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Buttom = styled.TouchableOpacity`
  width: 88%;
  height: 50px;
  border-radius: 50px;
  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.Text`
  font-size: 17px;
  color: black;
  font-weight: bold;
  letter-spacing: 0.3px;
`;
