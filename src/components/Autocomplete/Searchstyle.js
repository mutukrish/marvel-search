import styled from "styled-components";
import * as palette from "../../pallete/default.js";

export const Searchcontainer = styled.div`
  position: relative;
`;

export const Inputcontainer = styled.div`
  position: relative;
  .spinner {
    position: absolute;
    right: 5px;
    top: 10px;
  }
`;

export const Characterlist = styled.div`
  position: absolute;
  background: ${palette.SMOKE};
  max-width: 350px;
  min-width: 350px;
  right: 0;
  z-index: 999;
  clear: both;
  margin-left: -100px;
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: 0 4px 2px -2px gray;
  max-height: 400px;
  overflow-y: scroll;
  .errorMessage {
    text-align: center;
    padding: 40px 10px;
    h2 {
      color: ${palette.RED};
      margin: 0;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 599px) {
    margin-left: 0;
    right: 0;
    left: 0;
    max-width: initial;
    width: 100%;
  }
`;

export const Searchipt = styled.input`
  border-radius: 5px;
  height: 20px;
  width: 200px;
  padding: 7px;
  font-size: 12px;
  @media (max-width: 599px) {
    width: 100%;
    margin: 0 auto;
    background: ${palette.SMOKE};
  }
`;
