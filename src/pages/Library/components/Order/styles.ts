import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 25px;
  margin-left: -10px;
`;

export const ContainerText = styled.Text`
  font-size: 15px;
  color: ${theme.colors.white};
  margin-left: 42px;
`;

export const ConatinerIcons = styled.View`
  margin-right: -30;
`;

export const ContainerIconRigt = styled.View`
  position: absolute;
  right: 15px;
  bottom: 0px;
`;
