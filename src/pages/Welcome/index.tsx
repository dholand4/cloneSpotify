import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";

import * as Styles from "./styles";

function Welcome() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Home_Stack");
  }

  return (
    <Styles.Container>
      <Styles.ContainerText>Welcome</Styles.ContainerText>
      <Button title="Entrar" onPress={handleNavigation} />
    </Styles.Container>
  );
}

export default Welcome;
