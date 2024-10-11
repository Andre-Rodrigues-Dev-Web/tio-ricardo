import styled from "styled-components";

export const ContainerPlayerAudio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1b1b1b, #2c2c2c);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 95%;
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 20px 0;
  gap: 15px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Track = styled.div`
  background-color: #282828;
  color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  min-width: 300px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  scroll-snap-align: start;
  position: relative;

  &:hover {
    background-color: #3a3a3a;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  svg {
    font-size: 28px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  img {
    width: 65px;
    border-radius: 10px;
    margin-right: 15px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;

    h3 {
      font-size: 16px;
      font-weight: 600;
      position: relative;

      &:after {
        background: #8d4641;
        border-radius: 2px;
        bottom: -3px;
        content: "";
        height: 3px;
        position: absolute;
        left: 0;
        width: 30%;
      }
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #b3b3b3;

      &:last-child {
        font-size: 12px;
        color: #888;
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 267px;
    padding: 15px;

    h2 {
      font-size: 16px;
    }

    img {
      width: 50px;
    }

    svg {
      font-size: 24px;
    }

    .text {
      p {
        margin: 0;
        font-size: 18px;
        &:last-child {
          font-size: 13px;
          font-weight: 600;
        }
      }
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  button {
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    margin: 0 15px;
    font-size: 26px;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #8d4641;
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 130px;
    height: 6px;
    background: #ffffff;
    border-radius: 5px;
    outline: none;
    transition: background 0.3s ease;
    margin: 0 20px;

    &:hover {
      background: #8d4641;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: #8d4641;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;

    button {
      font-size: 22px;
      margin: 0;
    }

    input[type="range"] {
      width: 110px;
    }
  }
`;

export const AlbumCover = styled.img`
  width: 100%;
  max-width: 340px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    max-width: 250px;
    margin-bottom: 20px;
  }
`;
