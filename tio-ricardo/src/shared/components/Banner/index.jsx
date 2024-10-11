import { ContainerBanner, TextContainer, LinksBanner } from "./style";
import { Col, Container, Row } from "../../components/Grids/style";
import { Link } from "react-router-dom";
const Banner = ({ backgroundBanner }) => {
  return (
    <ContainerBanner backgroundBanner={backgroundBanner}>
      <Container padding="10em 4em">
        <Row>
          <Col width="70%">
            <TextContainer>
              <h1>Olá, seja bem-vindo ao site do Tio Ricardo!</h1>
              <p>
                Aqui você encontra tudo o que precisa saber sobre a história e a
                vida de Tio Ricardo, suas composições e muito mais.
              </p>
              <LinksBanner>
                <Link to={"/"}>Contato para shows</Link>
                <Link to={"/"}>Adquira minhas musicas</Link>
              </LinksBanner>
            </TextContainer>
          </Col>
        </Row>
      </Container>
    </ContainerBanner>
  );
};

export default Banner;
