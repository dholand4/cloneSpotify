import styled from "styled-components/native";
import theme from "../../global/styles/theme";

type ColorProps = {
  color: string;
};

export const abc = styled.View``;

export const Container = styled.View`
  padding: 6px;
`;

export const Card = styled.TouchableOpacity<ColorProps>`
  background-color: ${({ color }) => color};
  height: 115px;
  width: 182px;
  border-radius: 5px;
  padding: 13px;
  flex-direction: row;
  overflow: hidden;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.white};
`;

export const Image = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 12px;
  position: absolute;
  right: -20px;
  bottom: -6px;

  transform: rotate(36deg);
`;
