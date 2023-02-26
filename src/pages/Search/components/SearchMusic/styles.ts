import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const ContainerSearchMusic = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
`;

export const Search = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-left: 8px;
  color: ${theme.colors.text};
  width: 100%;
`;

export const ContainerSearch = styled.View`
  height: 52px;
  border-radius: 5px;
  width: 92%;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
`;
