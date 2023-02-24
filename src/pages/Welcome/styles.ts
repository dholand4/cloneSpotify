import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.background};
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding-top: 110px;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 110px;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: ${theme.colors.white};
  text-align: center;
  line-height: 25px;
  letter-spacing: 0.3px;
`;

export const ButtomNav = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const TitleButtom = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.3px;
`;

export const ContainerLogo = styled.View``;
export const ContainerText = styled.View``;
export const ContainerButtom = styled.View`
  width: 100%;
  align-items: center;
`;
