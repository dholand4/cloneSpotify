import React, { useState } from "react";
import { FlatList } from "react-native";
import CardTypes from "../../../../components/CardTypes";
import Header from "../../components/Header";
import { SearchMusic } from "../../components/SearchMusic";

import mockTypes from "../../../../constants/musicTypes";

import * as Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Search() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [searchMusicTop, setSearchMusicTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchMusicHeight, setSearchMusicHeight] = useState(0);

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("SearchInput");
  }

  const handleHeaderLayout = (event: {
    nativeEvent: { layout: { height: React.SetStateAction<number> } };
  }) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  const handleSearchMusicLayout = (event: {
    nativeEvent: { layout: { height: React.SetStateAction<number> } };
  }) => {
    setSearchMusicHeight(event.nativeEvent.layout.height);
  };

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { y: any } };
  }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 50;

    if (offsetY > threshold && isHeaderVisible) {
      setIsHeaderVisible(false);
      setIsTitleVisible(false);
      setSearchMusicTop(0);
    } else if (offsetY <= threshold && !isHeaderVisible) {
      setIsHeaderVisible(true);
      setIsTitleVisible(true);
    }

    if (isHeaderVisible) {
      setSearchMusicTop(Math.min(offsetY, headerHeight));
    }
  };

  return (
    <Styles.Container>
      {isHeaderVisible && <Header onLayout={handleHeaderLayout} />}
      <SearchMusic
        action={handleNavigation}
        style={{
          position: "absolute",
          top: Math.max(headerHeight - searchMusicHeight, searchMusicTop),
          zIndex: 1,
        }}
        onLayout={handleSearchMusicLayout}
      />
      {isTitleVisible && (
        <Styles.Title>Navegar por todas as seções</Styles.Title>
      )}
      <Styles.ContainerCardTypes
        style={{ marginTop: headerHeight + searchMusicHeight }}
      >
        <FlatList
          style={{ marginTop: 8, marginBottom: 50 }}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={mockTypes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: mock }) => (
            <CardTypes title={mock.nome} image={mock.imagem} color={mock.cor} />
          )}
          onScroll={handleScroll}
        />
      </Styles.ContainerCardTypes>
    </Styles.Container>
  );
}

export default Search;
