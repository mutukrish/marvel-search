import React from "react";
import { Characteritem } from "./Characterstyle";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Character = ({ selectCharacter, character }) => {
  const avatar = !character.images.xs
    ? DEFAULT_PLACEHOLDER_IMAGE
    : character.images.xs;
  return (
    <Characteritem onClick={() => selectCharacter(character)}>
      <div className="avatar">
        <img alt={character.name} src={avatar} />
      </div>

      <div>
        <h2>{character.name}</h2>
        <p>({character.work.occupation})</p>
      </div>
    </Characteritem>
  );
};

export default Character;
