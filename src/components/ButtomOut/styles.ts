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
  border: 0.25px;
  border-color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: row;
`;

export const ContainerText = styled.Text`
  font-size: 17px;
  color: ${theme.colors.white};
  font-weight: 400;
  text-align: center;
  line-height: 23px;
  letter-spacing: 0.3px;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  left: 25px;
`;
