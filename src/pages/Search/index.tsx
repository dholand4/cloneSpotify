import React from "react";
import { FlatList } from "react-native";
import CardTypes from "../../components/CardTypes";

import mockTypes from "../../constants/musicTypes";

import Header from "./components/Header";
import { SearchMusic } from "./components/SearchMusic";

import * as Styles from "./styles";

function Search() {
  return (
    <Styles.Container>
      <Header />
      <SearchMusic />
      <Styles.Title>Navegar por todas as seções</Styles.Title>
      <Styles.ContainerCardTypes>
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={mockTypes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: mock }) => (
            <CardTypes title={mock.nome} image={mock.imagem} color={mock.cor} />
          )}
        ></FlatList>
      </Styles.ContainerCardTypes>
    </Styles.Container>
  );
}

export default Search;
