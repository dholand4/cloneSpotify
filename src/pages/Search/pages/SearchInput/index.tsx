import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";
import { useNavigation } from "@react-navigation/native";

function SearchInput() {
  const { colors } = useContext(ThemeContext);
  const { goBack } = useNavigation();
  return (
    <Styles.Container>
      <Styles.ContainerSearchMusic>
        <Styles.ContainerSearch>
          <Feather
            onPress={goBack}
            name="arrow-left"
            size={28}
            color={colors.white}
            style={{ marginLeft: 13 }}
          />
          <Styles.Search
            autoFocus
            placeholder="O que você quer ouvir?"
            placeholderTextColor={colors.gray_place}
          />
          <Feather
            name="camera"
            size={28}
            color={colors.white}
            style={{ marginLeft: 13 }}
          />
        </Styles.ContainerSearch>
      </Styles.ContainerSearchMusic>

      <Styles.Title>Encontre o que você quer ouvir</Styles.Title>
      <Styles.SubTitle>
        Busque artistas, músicas, podcasts e muito mais.
      </Styles.SubTitle>
    </Styles.Container>
  );
}

export default SearchInput;
