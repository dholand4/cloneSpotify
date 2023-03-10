import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import mf from "../../assets/albuns/engenheiros.jpeg";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";
import { StatusBar } from "expo-status-bar";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import { FlatList, ScrollView } from "react-native";

const musics = [
  { name: "Inifnita Highway - Ao Vivo" },
  { name: "Até O Fim - Ao Vivo" },
  { name: "O Papa é Pop - Ao Vivo" },
  { name: "Pra Ser Sincero - Ao Vivo" },
  { name: "Terra de Gigantes - Ao Vivo" },
  { name: "Refrão de Bolero - Ao Vivo" },
  { name: "3ª do Plural - Ao Vivo" },
  { name: "Pose - Ao Vivo" },
  { name: "A Montanha - Ao Vivo" },
  { name: "Piano Bar - Ao Vivo" },
  { name: "Alívio Imediato - Ao Vivo" },
  { name: "Parabólica - Ao Vivo" },
  { name: "Cinza - Ao Vivo" },
];

function About() {
  const { goBack } = useNavigation();
  const { colors } = useContext(ThemeContext);

  return (
    <ScrollView>
      <Styles.Container>
        <StatusBar backgroundColor="#285454" style="light" />
        <Styles.ButtonBack onPress={goBack}>
          <Feather name="arrow-left" size={30} color={colors.white} />
        </Styles.ButtonBack>
        <Styles.Image source={mf} />
        <Styles.Title>Engenheiros do Hawaii</Styles.Title>
        <Styles.ContainerUser>
          <Styles.Circule>
            <Styles.TextCircule>D</Styles.TextCircule>
          </Styles.Circule>
          <Styles.Greeting>Daniel</Styles.Greeting>
        </Styles.ContainerUser>
        <Styles.ContainerPublic>
          <Feather name="globe" size={17} color={colors.gray} />
          <Styles.TextPublic>1h 45min</Styles.TextPublic>
        </Styles.ContainerPublic>
        <Buttons />
        <Styles.Button>
          <Styles.ContainerText>
            Adicionaar a esta playlist
          </Styles.ContainerText>
        </Styles.Button>
        <FlatList
          style={{
            width: 500,
            left: -35,
          }}
          showsVerticalScrollIndicator={false}
          data={musics}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: musics }) => <Card name={musics.name}></Card>}
          contentContainerStyle={{
            paddingBottom: musics.length - 1 === 0 ? 0 : 120,
          }}
        />
      </Styles.Container>
    </ScrollView>
  );
}

export default About;
