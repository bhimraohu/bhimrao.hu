import React from 'react';
import styled from 'styled-components';

const ImageRowWrapper = styled.section`
  margin: 5rem 0;
  width: 100%;

  .image-row-wrapper {
    display: flex;

    img {
      width: 33.33334%;
    }
  }
`;

const ImageRow = ({ image_left, image_center, image_right }) => {
  return (
    <ImageRowWrapper>
      <div className="image-row-wrapper">
        <img src={image_left.url} alt={image_left.alt} />
        <img src={image_center.url} alt={image_center.alt} />
        <img src={image_right.url} alt={image_right.alt} />
      </div>
    </ImageRowWrapper>
  );
}

export default ImageRow;