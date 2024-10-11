import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e2e1eb;
  color: #222;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 5rem;
    margin: 0;
  }

  P{
    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
    h1 {
      font-size: 3rem;
    }
    p{
        font-size: 1.2;
    }
  }
`;

export const ErrorMessage = styled.h2`
  font-size: 2.5rem;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ErrorLink = styled(Link)`
  background-color: #ffc107;
  border-radius: 5px;
  color: #222;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 14px 20px;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px 15px;
  }
`;
