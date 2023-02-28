import React, { useContext } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import * as Styles from "./styles";
import { ThemeContext } from "styled-components";

function Order() {
  const { colors } = useContext(ThemeContext);

  return (
    <Styles.Container>
      <Styles.ConatinerIcons>
        <AntDesign
          name="arrowdown"
          size={17}
          color={colors.white}
          style={{ marginLeft: 25 }}
        />
      </Styles.ConatinerIcons>
      <Styles.ConatinerIcons>
        <AntDesign
          name="arrowup"
          size={17}
          color={colors.white}
          style={{ marginLeft: 25 }}
        />
      </Styles.ConatinerIcons>

      <Styles.ContainerText>Ordem alfabética</Styles.ContainerText>
      <Styles.ContainerIconRigt>
        <MaterialCommunityIcons
          name="view-grid-outline"
          size={20}
          color={colors.white}
          style={{ marginLeft: 25 }}
        />
      </Styles.ContainerIconRigt>
    </Styles.Container>
  );
}

export default Order;
