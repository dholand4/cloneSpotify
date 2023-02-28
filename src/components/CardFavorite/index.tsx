import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import mf from "../../assets/albuns/engenheiros.jpeg";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import * as Styles from "./styles";

function CardFavorite() {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.Image source={mf} />
      </Styles.Card>
      <Styles.ContaienrName>
        <Styles.Name>Engenheiros do Hawaii</Styles.Name>
        <Styles.ContainerType>
          <Styles.Circule>
            <AntDesign name="arrowdown" size={13} color={colors.background} />
          </Styles.Circule>
          <Styles.TypeGer>Playlist </Styles.TypeGer>
          <FontAwesome
            name="circle"
            size={5}
            color={colors.gray_place}
            style={{ bottom: -1, marginLeft: 3, marginRight: 3 }}
          />
          <Styles.TypeGer> Daniel</Styles.TypeGer>
        </Styles.ContainerType>
      </Styles.ContaienrName>
    </Styles.Container>
  );
}

export default CardFavorite;
