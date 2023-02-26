import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const ContainerCardTypes = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 19px;

  color: ${theme.colors.white};
  font-weight: 500;
  letter-spacing: 0.6px;

  margin-top: 40px;
`;

export const HeaderHeight = styled.View``;
