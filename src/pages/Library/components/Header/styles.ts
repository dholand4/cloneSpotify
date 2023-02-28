import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 16.5%;
  padding: 10px;
  padding-left: 15px;
  border-bottom-width: 3px;
  border-bottom-color: ${theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 20px;
`;

export const Greeting = styled.Text`
  color: ${theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0.3px;
`;

export const Circule = styled.View`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${theme.colors.secondary};
`;

export const TextCircule = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.background};
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  right: 5px;
`;
