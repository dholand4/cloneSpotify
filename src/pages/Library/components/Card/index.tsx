import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Fontisto } from "@expo/vector-icons";

import * as Styles from "./styles";

type RadiusProps = {
  title: string;
  radius: string;
};

function Card({ title, radius }: RadiusProps) {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Styles.Card radius={radius}>
        <Fontisto name="plus-a" size={35} color={colors.gray} />
      </Styles.Card>
      <Styles.ContaienrName>
        <Styles.Name>{title}</Styles.Name>
      </Styles.ContaienrName>
    </Styles.Container>
  );
}

export default Card;
