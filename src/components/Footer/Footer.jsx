import { Link } from "react-router-dom";
import { StyledFooter } from "../../utils/MainStyle";
import styled from "styled-components";

const Linkedin = styled.a`
  text-decoration: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <b>SNCB</b> by{" "}
      <Linkedin
        href={"https://www.linkedin.com/in/noris-benseghir"}
        target="_blank"
      >
        Noris BENSEGHIR
      </Linkedin>
    </StyledFooter>
  );
}

export default Footer;
