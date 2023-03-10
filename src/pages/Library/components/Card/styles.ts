import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

type RadiusProps = {
  radius?: string;
};

export const Container = styled.TouchableOpacity`
  padding: 6px;
  align-items: center;
  padding-left: 22px;
  flex-direction: row;
`;

export const Card = styled.View<RadiusProps>`
  height: 80px;
  width: 80px;
  border-radius: ${({ radius }) => radius}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray_second};
  margin-bottom: 8px;
`;

export const ContaienrName = styled.View`
  margin-left: 14px;
  margin-top: -10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.3px;
`;
