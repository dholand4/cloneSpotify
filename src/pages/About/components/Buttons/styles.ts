import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 40px;
  /* background-color: red; */
  align-items: center;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 40px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  justify-content: center;
  border-radius: 50px;
  border: 1px;
  border-color: ${theme.colors.gray};
  margin-right: 15px;
`;

export const ContainerText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  margin-left: 15px;
  margin-right: 15px;
  letter-spacing: 0.5px;
`;

export const Circule = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary};
`;

export const Circule2 = styled.View`
  height: 28px;
  width: 28px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${theme.colors.secondary};
`;
