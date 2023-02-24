import React, { useContext, useState } from "react";

import engenheiros from "../../assets/albuns/engenheiros.jpeg";

import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

function Play() {
  const { colors } = useContext(ThemeContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Styles.Content>
      <Styles.Container>
        <Styles.Album source={engenheiros}></Styles.Album>
        <Styles.ContainerTitles>
          <Styles.Music>Infinita Highway - Ao Vivo</Styles.Music>
          <Styles.Singer>Engenheiros Do Hawaii</Styles.Singer>
        </Styles.ContainerTitles>
        <Styles.ContainerIcons>
          <Styles.TouchImage>
            <MaterialCommunityIcons
              name="monitor-speaker"
              size={24}
              color={colors.gray}
            />
          </Styles.TouchImage>
          <Styles.TouchImage onPress={() => setIsLiked((prev) => !prev)}>
            {isLiked ? (
              <AntDesign name="heart" size={24} color={colors.secondary} />
            ) : (
              <AntDesign name="hearto" size={24} color={colors.white} />
            )}
          </Styles.TouchImage>
          <Styles.TouchImage onPress={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? (
              <Fontisto name="play" size={20} color={colors.white} />
            ) : (
              <Fontisto name="pause" size={20} color={colors.white} />
            )}
          </Styles.TouchImage>
        </Styles.ContainerIcons>
      </Styles.Container>
    </Styles.Content>
  );
}

export default Play;
