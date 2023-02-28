import React from "react";

import * as Styles from "./styles";

function Button() {
  return (
    <Styles.Container>
      <Styles.Button>
        <Styles.ContainerText>Playlist</Styles.ContainerText>
      </Styles.Button>
      <Styles.Button>
        <Styles.ContainerText>Baixado</Styles.ContainerText>
      </Styles.Button>
    </Styles.Container>
  );
}

export default Button;
