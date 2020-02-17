import React from "react";
import { Navcontainer, Logo } from "./Headerstyle";
import Brand from "../../assets/marvel.png";
import Search from "../Autocomplete/Search";

import Media from "react-media";

const Header = () => {
  return (
    <Navcontainer>
      <Logo src={Brand} alt="Logo" />
      <Media query="(min-width: 600px)" render={() => <Search />} />
    </Navcontainer>
  );
};

export default Header;
