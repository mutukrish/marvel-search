import React from "react";
import Media from "react-media";
import Header from "./Common/Header";
import Search from "./Autocomplete/Search";
import { Maincontainer } from "./Appstyle";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Maincontainer>
        <Media query="(max-width: 599px)" render={() => <Search />} />
      </Maincontainer>
    </div>
  );
};

export default App;
