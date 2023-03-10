import React, { useContext } from "react";

import { AntDesign, FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

function Buttons() {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Styles.Button>
        <Styles.ContainerText>Enriquecer</Styles.ContainerText>
      </Styles.Button>
      <Styles.Circule2>
        <AntDesign name="arrowdown" size={13} color={colors.background} />
      </Styles.Circule2>
      <Ionicons
        name="person-add-outline"
        color={colors.gray}
        size={23}
        style={{ marginRight: 15 }}
      ></Ionicons>
      <Feather
        name="more-vertical"
        color={colors.gray}
        size={25}
        style={{ marginRight: 50 }}
      ></Feather>
      <Ionicons
        name="shuffle-outline"
        color={colors.gray}
        size={28}
        style={{ marginRight: 20 }}
      ></Ionicons>
      <Styles.Circule>
        <Ionicons name="play" color={colors.background} size={28}></Ionicons>
      </Styles.Circule>
    </Styles.Container>
  );
}
export default Buttons;
