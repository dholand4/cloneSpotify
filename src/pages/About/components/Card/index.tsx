import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import mf from "../../../../assets/albuns/engenheiros.jpeg";
import { EvilIcons, FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

import * as Styles from "./styles";

type Props = {
  name: string;
};

function Card({ name }: Props) {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.Image source={mf} />
      </Styles.Card>
      <Styles.ContaienrName>
        <Styles.Name>{name}</Styles.Name>
        <Styles.ContainerType>
          <Styles.ContainerLyrics>
            <Styles.Lyrics>LYRICS</Styles.Lyrics>
          </Styles.ContainerLyrics>

          <Styles.TypeGer> Engenheiros do Hawaii</Styles.TypeGer>
        </Styles.ContainerType>
      </Styles.ContaienrName>
      <Styles.PositionIcon>
        <Feather name="more-vertical" color={colors.gray} size={28}></Feather>
      </Styles.PositionIcon>
    </Styles.Container>
  );
}

export default Card;
