import styled from "styled-components";
import colors from "../../utils/Colors";

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src="https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/blob/assets/404.svg?raw=true" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
