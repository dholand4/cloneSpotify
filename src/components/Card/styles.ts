import styled from "styled-components/native";
import theme from "../../global/styles/theme";

type RadiusProps = {
  radius?: string;
  align?: string;
  margin?: string;
};

export const Container = styled.View`
  padding: 6px;
  padding-left: 10px;
`;

export const Card = styled.TouchableOpacity<RadiusProps>`
  height: 165px;
  width: 165px;
  flex-direction: row;
  overflow: hidden;

  border-radius: ${({ radius }) => radius}px;
`;

export const ContaienrName = styled.View<RadiusProps>`
  width: 165px;
  align-items: ${({ align }) => align};
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.6px;
  line-height: 24px;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const TypeGer = styled.Text<RadiusProps>`
  color: ${theme.colors.secondary};
  margin-bottom: 1px;
  margin-top: ${({ margin }) => margin}px;
  font-size: 12px;
`;
