import React from "react";
import mf from "../../assets/albuns/engenheiros.jpeg";

import * as Styles from "./styles";

interface CardProps {
  radius: string;
  image: string;
  name: string;
}

function Card({ radius, image, name }: CardProps) {
  return (
    <Styles.Container>
      <Styles.Card radius={radius}>
        <Styles.Image source={image} />
      </Styles.Card>
      <Styles.ContaienrName>
        <Styles.Name>{name}</Styles.Name>
      </Styles.ContaienrName>
    </Styles.Container>
  );
}

export default Card;
