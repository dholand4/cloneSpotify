import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import { ThemeContext } from "styled-components";

export function SearchMusic() {
  const { colors } = useContext(ThemeContext);

  return (
    <S.ContainerSearchMusic>
      <S.ContainerSearch>
        <Feather
          name="search"
          size={28}
          color={colors.background}
          style={{ marginLeft: 13 }}
        />
        <S.Search placeholder="O que você quer ouvir?" />
      </S.ContainerSearch>
    </S.ContainerSearchMusic>
  );
}
