import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 12%;
  padding: 10px;
  padding-left: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
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
  width: 31px;
  height: 31px;
  margin-left: 20px;
`;

export const TouchImage = styled.TouchableOpacity``;
