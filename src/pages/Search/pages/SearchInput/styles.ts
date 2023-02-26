import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 19px;
  color: ${theme.colors.white};
  font-weight: 500;
  letter-spacing: 0.6px;
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray_place};
  font-weight: 500;
  margin-top: 15px;
  letter-spacing: 0.6px;
`;

export const ContainerSearchMusic = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Search = styled.TextInput`
  font-size: 17px;
  font-weight: 450;
  margin-left: 12px;
  width: 73%;
`;

export const ContainerSearch = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.gray_input};
`;
