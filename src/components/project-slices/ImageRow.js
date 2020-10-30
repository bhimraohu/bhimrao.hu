import React from 'react';
import styled from 'styled-components';

const ImageRowWrapper = styled.section`
  padding: 10rem 0;
  width: 100%;

  .image-grid-wrapper {
    display: flex;

    img {
      width: 33.33334%;
    }
  }
`;

const ImageRow = ({ image_left, image_center, image_right }) => {
  return (
    <ImageRowWrapper>
      <div className="image-grid-wrapper">
        <img src={image_left.url} alt={image_left.alt} />
        <img src={image_center.url} alt={image_center.alt} />
        <img src={image_right.url} alt={image_right.alt} />
      </div>
    </ImageRowWrapper>
  );
}

export default ImageRow;