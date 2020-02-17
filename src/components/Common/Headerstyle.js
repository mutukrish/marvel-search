import styled from "styled-components";
import * as palette from "../../pallete/default.js";

export const Navcontainer = styled.nav`
  height: 80px;
  background-color: ${palette.RED};
  border: 1px solid red;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 90px;
`;
