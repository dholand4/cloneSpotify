import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 16%;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 55px;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  color: ${theme.colors.white};
  font-size: 27px;
  font-weight: bold;
  letter-spacing: 0.3px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 33px;
  height: 33px;
  margin-left: 20px;
`;

export const TouchImage = styled.TouchableOpacity``;
