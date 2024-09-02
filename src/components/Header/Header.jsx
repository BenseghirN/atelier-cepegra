import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/train.svg";
import { StyledLink } from "../../utils/MainStyle";
import "../../styles/Header.css";

const TrainLogo = styled.img`
  height: 70px;
`;

const StyledTitle = styled.h2`
  margin: 0;
  max-width: 280px;
`;
const StyledSubTitle = styled.p`
  margin-top: 0;
  max-width: 280px;
`;

function Header() {
  return (
    <>
      <header className="ac-header">
        <Link to="/">
          <TrainLogo src={Logo} />
        </Link>
        <StyledTitle>Trains au départ</StyledTitle>
        <StyledSubTitle>Trains à l'heure?</StyledSubTitle>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </header>
    </>
  );
}

export default Header;
