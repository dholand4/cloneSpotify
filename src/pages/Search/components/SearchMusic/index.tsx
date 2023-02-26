import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

interface Props {
  action?: () => void;
}

export function SearchMusic({ action }: Props) {
  const { colors } = useContext(ThemeContext);

  return (
    <Styles.ContainerSearchMusic onPress={action}>
      <Styles.ContainerSearch>
        <Feather
          name="search"
          size={28}
          color={colors.background}
          style={{ marginLeft: 13 }}
        />
        <Styles.Search>O que você quer ouvir?</Styles.Search>
      </Styles.ContainerSearch>
    </Styles.ContainerSearchMusic>
  );
}
