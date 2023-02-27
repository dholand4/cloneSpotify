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
