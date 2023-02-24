import { useNavigation } from "@react-navigation/native";
import React from "react";

import logo from "../../assets/logo.png";
import Buttom from "../../components/Buttom";
import ButtomOut from "../../components/ButtomOut";
import * as Styles from "./styles";

function Welcome() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Home_Stack");
  }

  return (
    <Styles.Container>
      <Styles.ContainerLogo>
        <Styles.Logo source={logo}></Styles.Logo>
      </Styles.ContainerLogo>

      <Styles.ContainerText>
        <Styles.Title>
          Milhões de músicas à sua escolha.{"\n"}Grátis no Spotify.
        </Styles.Title>
      </Styles.ContainerText>
      <Styles.ContainerButtom>
        <Buttom />
        <ButtomOut
          Icon="mobile"
          Text={"Continuar com um número de\ntelefone"}
        />
        <ButtomOut Icon={"google"} Text={"Continuar com o Google"} />
        <ButtomOut Icon={"facebook"} Text={"Continuar com o Facebook"} />
        <Styles.ButtomNav onPress={handleNavigation}>
          <Styles.TitleButtom>Entrar</Styles.TitleButtom>
        </Styles.ButtomNav>
      </Styles.ContainerButtom>
    </Styles.Container>
  );
}

export default Welcome;
