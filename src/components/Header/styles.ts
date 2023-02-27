import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 12%;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 35px;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  color: ${theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0.3px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 33px;
  height: 33px;
  margin-left: 14px;
`;

export const TouchImage = styled.TouchableOpacity``;
