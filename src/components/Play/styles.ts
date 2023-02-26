import styled from "styled-components/native";
import theme from "../../global/styles/theme";

type ProgressProps = {
  percentage: number;
};

export const Container = styled.View`
  align-items: center;
  height: 60px;
  width: 95%;
  border-radius: 10px;
  flex-direction: row;
  background-color: #084c48;
`;

export const Content = styled.View`
  width: 100%;
  position: absolute;
  bottom: 64px;
  justify-content: center;
  align-items: center;
`;

export const Album = styled.Image`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  border-radius: 5px;
`;

export const Music = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  letter-spacing: 0.3px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Singer = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  font-weight: 400;
  letter-spacing: 0.3px;
`;

export const ContainerTitles = styled.View`
  margin-left: 10px;
  margin-right: 22px;
`;

export const TouchImage = styled.TouchableOpacity`
  margin-right: 22px;
  align-items: center;
  justify-content: center;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const ContainerBar = styled.View`
  position: absolute;
  bottom: 0px;
  width: 90%;
`;

export const ContainerProgress = styled.View<ProgressProps>`
  width: ${({ percentage }) => percentage}%;
  height: 2px;
  background: ${theme.colors.white};
`;
