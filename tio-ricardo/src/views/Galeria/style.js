import styled from 'styled-components';

export const ContentGalery = styled.section`
  padding: 7em 0;
  text-align: center;
  h2 {
    font-size: 3em;
  }
  @media (max-width: 768px) {
    padding: 2em 0;
  }
`;

export const PhotoGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 4em 0;
`;

export const PhotoWrapper = styled.div`
  border-radius: 10px;
  box-shadow: ${(props) => (props.zoomed ? '0px 10px 30px rgba(0, 0, 0, 0.3)' : 'none')};
  display: inline-flex;
  flex-wrap: wrap;
  height: ${(props) => (props.zoomed ? 'auto' : '400px')};
  overflow: hidden;
  object-fit: cover;
  position: relative;
  width: ${(props) => (props.zoomed ? '40%' : '25%')};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: ${(props) => (props.zoomed ? 10 : 1)};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.zoomed ? 'scale(1.05)' : 'scale(1)')};
  }

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    img {
      transform: scale(1.05);
    }
  }
`;

export const ZoomControls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 15px;

  svg {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  svg:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  pointer-events: none;
`;
