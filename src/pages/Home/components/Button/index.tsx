import React from "react";

import * as Styles from "./styles";

function Button() {
  return (
    <Styles.Container>
      <Styles.Button>
        <Styles.ContainerText>Música</Styles.ContainerText>
      </Styles.Button>
      <Styles.Button>
        <Styles.ContainerText>Podcasts e programas</Styles.ContainerText>
      </Styles.Button>
    </Styles.Container>
  );
}

export default Button;
