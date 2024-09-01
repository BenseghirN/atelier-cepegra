import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    background-color: #04bc9c;
  }
`;

export const StyledFooter = styled.p`
  font-size: 15px;
  text-align: center;
`;
