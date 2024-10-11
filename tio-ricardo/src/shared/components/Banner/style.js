import styled from "styled-components";
const TabletBreakpoint = "768px";
const DesktopBreakpoint = "1400px";

const ContainerBanner = styled.div`
  background-image: ${({ backgroundBanner }) => `url(${backgroundBanner})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 100%;
  @media (width >= ${TabletBreakpoint}) {
    background-position: 36em 5em;
    background-size: 43%;
  }
  @media (width >= ${DesktopBreakpoint}) {
    background-position: 50em 8em;
    background-size: 43%;
  }
`;

const TextContainer = styled.div`
  h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1em;
  }
  @media (width >= ${TabletBreakpoint}) {
    margin-left: 8em;
    width: 50%;
    h1 {
      font-size: 3em;
      line-height: 50px;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 1.8em;
      line-height: 40px;
    }
  }
`;

const LinksBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  a {
    background-image: linear-gradient(to right, #4caf50 0%, #2196f3 100%);
    border-radius: 0.5em;
    color: #fff;
    display: inline-block;
    font-size: 1em;
    font-weight: 700;
    padding: 1em 2em;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-image: linear-gradient(to right, #2196f3 0%, #4caf50 100%);
    }
  }
  @media (width >= ${TabletBreakpoint}) {
    flex-direction: row;
    gap: 2em;
    a {
      font-size: 1.2em;
      margin-top: 1.7em;
      padding: 0.8em 1.5em;
    }
  }
`;

export { ContainerBanner, TextContainer, LinksBanner };
