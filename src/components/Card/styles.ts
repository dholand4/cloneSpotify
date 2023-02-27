import styled from "styled-components/native";
import theme from "../../global/styles/theme";

type RadiusProps = {
  radius: string;
};

export const abc = styled.View``;

export const Container = styled.View`
  padding: 6px;
  padding-left: 15px;
`;

export const Card = styled.TouchableOpacity<RadiusProps>`
  height: 175px;
  width: 175px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 10px;

  border-radius: ${({ radius }) => radius}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${theme.colors.white};
  margin-top: 25px;
  margin-bottom: 20px;
  letter-spacing: 0.3px;
`;

export const ContaienrName = styled.View`
  width: 175px;
  align-items: center; ;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.6px;
  line-height: 24px;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;
