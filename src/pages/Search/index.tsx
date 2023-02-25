import React from "react";
import Header from "./components/Header";
import { SearchMusic } from "./components/SearchMusic";

import * as Styles from "./styles";

function Search() {
  return (
    <Styles.Container>
      <Header />
      <SearchMusic />
    </Styles.Container>
  );
}

export default Search;
