import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

export function SearchMusic() {
  const { colors } = useContext(ThemeContext);

  return (
    <Styles.ContainerSearchMusic>
      <Styles.ContainerSearch>
        <Feather
          name="search"
          size={28}
          color={colors.background}
          style={{ marginLeft: 13 }}
        />
        <Styles.Search placeholder="O que você quer ouvir?" />
      </Styles.ContainerSearch>
    </Styles.ContainerSearchMusic>
  );
}
