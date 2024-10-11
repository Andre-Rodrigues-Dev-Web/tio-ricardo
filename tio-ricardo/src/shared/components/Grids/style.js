import styled from "styled-components";

const Container = styled.div`
  padding: 4em 1em;
  width: 99%;
  @media(min-width: 768px) {
    padding: ${props => props.padding || '0'};
    width: 98%;
  }
`;

const Col = styled.div`
  width: 100%;
  @media(min-width: 768px) {
    width: ${props => props.width || '100%'};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export{
    Container,
    Col,
    Row
}