import React, { useState } from 'react';
import { Col, Container, Row } from "../../shared/components/Grids/style";
import { ContentGalery, PhotoGalleryContainer, PhotoWrapper, ZoomControls, PhotoOverlay } from './style';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { photos } from './fotos'
import Seo from "../../shared/components/Seo";

const GaleriaDeFotos = () => {
  const [zoomedPhotoIndex, setZoomedPhotoIndex] = useState(null);
  const toggleZoom = (index) => {
    setZoomedPhotoIndex(index === zoomedPhotoIndex ? null : index);
  };

  return (
    <ContentGalery>
      <Seo
        titleSite="Confira alguns registros fotográficos de Cora & Theo"
        descriptionSite="Confira algumas fotografias da Dupla Cora & Theo"
        imageSite="https://coraetheo.com.br/logo512.png"
        urlSite="https://coraetheo.com.br/galeria-de-fotos"
      />
      <Container>
        <Row>
          <Col width="100%">
            <h2>Confira alguns registros fotográficos do Tio Ricardo</h2>
          </Col>
        </Row>
        <PhotoGalleryContainer>
          {photos.map((photo, index) => (
            <PhotoWrapper key={index} zoomed={zoomedPhotoIndex === index}>
              <LazyLoadImage
                src={photo.src}
                alt={photo.alt}
                effect="blur"
                width="100%"
                height="100%"
                style={{ borderRadius: '10px' }}
              />
              <ZoomControls>
                <FaSearchPlus
                  onClick={() => toggleZoom(index)}
                  size={35}
                  aria-label="Aumentar zoom"
                  role="button"
                />
                <FaSearchMinus
                  onClick={() => setZoomedPhotoIndex(null)}
                  size={35}
                  aria-label="Reduzir zoom"
                  role="button"
                />
              </ZoomControls>
              {zoomedPhotoIndex === index && <PhotoOverlay />}
            </PhotoWrapper>
          ))}
        </PhotoGalleryContainer>
      </Container>
    </ContentGalery>
  );
};

export default GaleriaDeFotos;
