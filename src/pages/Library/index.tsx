import React from "react";

import * as Styles from "./styles";
import Header from "./components/Header";
import Order from "./components/Order";
import CardFavorite from "../../components/CardFavorite";
import Card from "./components/Card";
import { useNavigation } from "@react-navigation/native";

function Library() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("About");
  }

  return (
    <Styles.Container>
      <Header />
      <Order />
      <CardFavorite action={handleNavigation} />
      <Card title="Adicionar artista" radius="100" />
      <Card title="Adicionar podcasts e programas" radius="10" />
    </Styles.Container>
  );
}

export default Library;
