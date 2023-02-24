import React, { useContext } from "react";
import { Octicons } from "@expo/vector-icons";

import faceIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";

import * as Styles from "./styles";
import { Image, View } from "react-native";
import { ThemeContext } from "styled-components";

interface Props {
  Icon: string;
  Text: string;
}

function MyIcons({ iconLibrary }: any) {
  const { colors } = useContext(ThemeContext);
  return (
    <View>
      {iconLibrary === "mobile" && (
        <Octicons
          name="device-mobile"
          size={23}
          color={colors.white}
          style={{ marginLeft: 5 }}
        />
      )}
      {iconLibrary === "google" && (
        <Image source={googleIcon} style={{ width: 26, height: 26 }} />
      )}
      {iconLibrary === "facebook" && (
        <Image source={faceIcon} style={{ width: 26, height: 26 }} />
      )}
    </View>
  );
}

function ButtomOut({ Icon, Text }: Props) {
  return (
    <Styles.Container>
      <Styles.Buttom>
        <Styles.ContainerIcon>
          <MyIcons iconLibrary={Icon}></MyIcons>
        </Styles.ContainerIcon>
        <Styles.ContainerText>{Text}</Styles.ContainerText>
      </Styles.Buttom>
    </Styles.Container>
  );
}

export default ButtomOut;
