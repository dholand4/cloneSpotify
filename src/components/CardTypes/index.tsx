import React from "react";

import * as Styles from "./styles";

interface CardProps {
  title: string;
  image: string;
  color: string;
}

function CardTypes({ title, image, color }: CardProps) {
  return (
    <Styles.Container>
      <Styles.Card color={color}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Image source={image} />
      </Styles.Card>
    </Styles.Container>
  );
}

export default CardTypes;
