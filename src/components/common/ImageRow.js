import React from 'react';
import styled from 'styled-components';

const ImageRowWrapper = styled.section`
  margin: ${props => props.isLastSlice ? '10rem 0 0 0' : '10rem 0'};
  width: 100%;

  @media screen and (max-width: 600px) {
    margin: ${props => props.isLastSlice ? '5rem 0 0 0' : '5rem 0'};
    
    .image-row-wrapper {
      flex-direction: column;

      img {
        width: 100% !important;
      }
    }
  }

  .image-row-wrapper {
    display: flex;

    img {
      width: 33.33334%;
    }
  }
`;

const ImageRow = ({ image_left, image_center, image_right, isLastSlice }) => {
  return (
    <ImageRowWrapper isLastSlice={isLastSlice}>
      <div className="image-row-wrapper">
        <img src={image_left.url} alt={image_left.alt} />
        <img src={image_center.url} alt={image_center.alt} />
        <img src={image_right.url} alt={image_right.alt} />
      </div>
    </ImageRowWrapper>
  );
}

export default ImageRow;