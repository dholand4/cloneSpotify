import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import * as Styles from "./styles";
import Header from "./components/Header";
import Order from "./components/Order";
import CardFavorite from "../../components/CardFavorite";
import Card from "./components/Card";

function Library() {
  const { colors } = useContext(ThemeContext);
  return (
    <Styles.Container>
      <Header />
      <Order />
      <CardFavorite />
      <Card title="Adicionar artista" radius="100" />
      <Card title="Adicionar podcasts e programas" radius="10" />
    </Styles.Container>
  );
}

export default Library;
