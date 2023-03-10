import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled(LinearGradient).attrs({
  colors: ["#3B7C7C", "#121212", "#121212"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 },
})`
  flex: 1;
  padding-top: 19px;
  align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 20px;
`;

export const Image = styled.Image`
  width: 270px;
  height: 270px;
`;

export const Title = styled.Text`
  font-size: 22px;
  letter-spacing: 0.3px;
  color: ${theme.colors.white};
  margin-top: 13px;
  right: 70px;
`;

export const Greeting = styled.Text`
  color: ${theme.colors.white};
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.3px;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 13px;
  right: 150px;
`;

export const Circule = styled.View`
  height: 18px;
  width: 18px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  background-color: ${theme.colors.secondary};
`;

export const TextCircule = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${theme.colors.background};
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  justify-content: center;
  border-radius: 50px;
  border: 1px;
  border-color: ${theme.colors.gray};
  margin-bottom: 20px;
`;

export const ContainerText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  margin-left: 30px;
  margin-right: 30px;
  letter-spacing: 0.5px;
`;

export const ContainerPublic = styled.View`
  flex-direction: row;
  margin-top: 13px;
  right: 145px;
`;

export const TextPublic = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray};
  letter-spacing: 0.5px;
  margin-left: 5px;
`;
