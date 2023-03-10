import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const CategoryTitle = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${theme.colors.white};
  margin-top: 25px;
  margin-bottom: 15px;
  letter-spacing: 0.3px;
  padding-left: 15px;
`;

export const Space = styled.View`
  height: 130px;
`;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`;
