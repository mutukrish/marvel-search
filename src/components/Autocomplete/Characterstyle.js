import styled from "styled-components";
import * as palette from "../../pallete/default.js";

export const Characteritem = styled.div`
  padding: 15px 25px;
  display: flex;
  border-bottom: 1px solid ${palette.GREY};
  align-items: center;
  .avatar {
    width: 35px;
    margin-right: 15px;
    img {
      border-radius: 100%;
      max-width: 100%;
    }
  }
  &:hover {
    cursor: pointer;
    background: ${palette.HOVERBG};
    h2 {
      color: ${palette.RED};
    }
  }
  h2 {
    margin: 0;
    font-size: 14px;
  }
  p {
    margin: 0;
    font-size: 12px;
    @media (max-width: 599px) {
      display: none;
    }
  }
`;
