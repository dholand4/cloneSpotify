import styled from "styled-components/native";
import theme from "../../global/styles/theme";

type ColorProps = {
  color: string;
};

export const Container = styled.View`
  padding: 8px;
`;

export const Card = styled.TouchableOpacity<ColorProps>`
  background-color: ${({ color }) => color};
  height: 120px;
  width: 180px;
  border-radius: 8px;
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
  right: -12px;
  bottom: -5px;

  transform: rotate(28deg);
`;
