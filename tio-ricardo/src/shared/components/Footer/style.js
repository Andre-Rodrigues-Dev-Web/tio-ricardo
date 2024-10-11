import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #0b0c0c;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FooterLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 1rem;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SocialIcon = styled.div`
  font-size: 2rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeveloperInfo = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;

  a {
      color: #ff8c00;
      font-weight: bold;
      margin-left: 5px;
      text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
