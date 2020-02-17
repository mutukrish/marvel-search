import React, { useReducer, useState } from "react";
import Character from "./Character";
import spinner from "../../assets/ajax-loader.gif";
import Searchinput from "./Searchinput";
import { initialState, reducer } from "../../store/reducer";
import axios from "axios";
import * as types from "../../store/actions/types";

import { BASE_URL } from "../../constants";
import { Searchcontainer, Characterlist, Inputcontainer } from "./Searchstyle";

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchValue, setSearchValue] = useState("");

  const search = searchValue => {
    setSearchValue(searchValue);
    if (searchValue.length > 0) {
      dispatch({
        type: types.SEARCH_CHARACTERS_REQUEST
      });

      axios(BASE_URL + searchValue).then(jsonResponse => {
        if (jsonResponse.statusText === "OK") {
          dispatch({
            type: types.SEARCH_CHARACTERS_SUCCESS,
            payload: jsonResponse.data
          });
        } else {
          dispatch({
            type: types.SEARCH_CHARACTERS_FAILURE,
            error: jsonResponse.data
          });
        }
      });
    }
  };
  const { characters, errorMessage, loading } = state;

  const selectCharacter = character => {
    console.log(character);
  };

  const retrievedCharacters =
    !loading && searchValue.length > 0 && characters.length === 0 ? (
      <div className="errorMessage">
        <h2>Oh No!</h2>
        <p>No results found for "{searchValue}"</p>
      </div>
    ) : (
      characters.map((character, index) => (
        <Character
          selectCharacter={selectCharacter}
          key={`${index}-${character.name}`}
          character={character}
        />
      ))
    );

  return (
    <Searchcontainer>
      <Inputcontainer>
        <Searchinput search={search} />
        {loading && !errorMessage ? (
          <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : (
          ""
        )}
      </Inputcontainer>

      {searchValue.length > 0 ? (
        <Characterlist>{retrievedCharacters}</Characterlist>
      ) : (
        ""
      )}
    </Searchcontainer>
  );
};

export default Search;
