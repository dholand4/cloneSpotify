import React, { useContext } from "react";
import Button from "../Button";
import { Feather, AntDesign, Fontisto } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

function Header() {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Circule>
          <Styles.TextCircule>D</Styles.TextCircule>
        </Styles.Circule>
        <Styles.Greeting>Sua Biblioteca</Styles.Greeting>
        <Styles.ContainerIcons>
          <Feather name="search" size={25} color={colors.white} />
          <Fontisto
            name="plus-a"
            size={25}
            color={colors.white}
            style={{ marginLeft: 25 }}
          />
        </Styles.ContainerIcons>
      </Styles.Content>
      <Button />
    </Styles.Container>
  );
}

export default Header;
