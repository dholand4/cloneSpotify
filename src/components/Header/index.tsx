import React, { useEffect, useState } from "react";
import notiIcon from "../../assets/icons/notification.png";
import hourIcon from "../../assets/icons/hour.png";
import settingsIcon from "../../assets/icons/settings.png";

import * as Styles from "./styles";

function Header() {
  const [greeting, setGreetting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetting("Bom dia");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetting("Boa tarde");
    } else {
      setGreetting("Boa noite");
    }
  });

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Greeting>{greeting}</Styles.Greeting>
        <Styles.ContainerIcons>
          <Styles.TouchImage>
            <Styles.Image source={notiIcon} />
          </Styles.TouchImage>
          <Styles.TouchImage>
            <Styles.Image source={hourIcon} />
          </Styles.TouchImage>
          <Styles.TouchImage>
            <Styles.Image source={settingsIcon} />
          </Styles.TouchImage>
        </Styles.ContainerIcons>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Header;
