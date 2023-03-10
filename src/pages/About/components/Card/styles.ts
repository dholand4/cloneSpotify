import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.TouchableOpacity`
  padding: 6px;
  align-items: center;
  padding-left: 18px;
  flex-direction: row;
  margin-bottom: 10px;
  left: 82px;
`;

export const Card = styled.View`
  height: 60px;
  width: 60px;
  flex-direction: row;
  overflow: hidden;
`;

export const ContaienrName = styled.View`
  margin-left: 11px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.3px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const TypeGer = styled.Text`
  color: ${theme.colors.gray_place};
  margin-bottom: 1px;
  font-size: 13px;
`;

export const ContainerLyrics = styled.View`
  border-radius: 3px;
  background-color: ${theme.colors.gray};
  margin-right: 5px;
`;

export const Lyrics = styled.Text`
  color: ${theme.colors.background};
  margin-bottom: 1px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ContainerType = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Circule = styled.View`
  height: 17px;
  width: 17px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${theme.colors.secondary};
`;

export const PositionIcon = styled.View`
  left: 80px;
`;
