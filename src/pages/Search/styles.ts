import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: ${theme.colors.background};
`;

export const ContainerText = styled.Text`
  font-size: 50px;
`;
