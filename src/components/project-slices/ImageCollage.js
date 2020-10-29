import React from 'react';
import styled from 'styled-components';

import { DesignSettings } from "../../utils/constants";

const ImageCollageWrapper = styled.section`
  padding: 10rem;
  background-color: ${props => props.background_color};
  
  .image-collage-wrapper {
    max-width: ${DesignSettings.innerWidth};
    margin: 0 auto;

    .image-collage-container {
      display: flex;
      
      &.bottom {
        display: flex;
        flex-direction: column;
        
        .small-images {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2%;
          
          img {
            max-width: 49%;
          }
        }
      }

      &.left {
        display: flex;
        flex-direction: row;
        
        > img {
          max-width: 40%;
        }
        
        .small-images {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 2%;

          > img:first-of-type {
            margin-bottom: 2%
          }
        }
      }
    }
  }
`;

const ImageCollage = ({ background_color, big_image_positioin, image_big, image_small_1, image_small_2 }) => {

  return (
    <ImageCollageWrapper background_color={background_color}>
      <div className="image-collage-wrapper">
        {
          getCollage(big_image_positioin, image_big, image_small_1, image_small_2)
        }
      </div>
    </ImageCollageWrapper>
  );
}

const getCollage = (big_image_positioin, image_big, image_small_1, image_small_2) => {
  switch (big_image_positioin) {
    case 'bottom':
      return bigImageBottom(image_big, image_small_1, image_small_2);
    case 'left':
      return bigImageLeft(image_big, image_small_1, image_small_2);
    case 'right':
      return null;
    case 'top':
      return null;
    default:
      return null;
  }
}

const bigImageBottom = (image_big, image_small_1, image_small_2) => {
  return (
    <div className="image-collage-container bottom">
      <div className="small-images">
        <img src={image_small_1.url} alt={image_small_1.alt} />
        <img src={image_small_2.url} alt={image_small_2.alt} />
      </div>
      <img src={image_big.url} alt={image_big.alt} />
    </div>
  )
}

const bigImageLeft = (image_big, image_small_1, image_small_2) => {
  return (
    <div className="image-collage-container left">
      <img src={image_big.url} alt={image_big.alt} />
      <div className="small-images">
        <img src={image_small_1.url} alt={image_small_1.alt} />
        <img src={image_small_2.url} alt={image_small_2.alt} />
      </div>
    </div>
  )
}

export default ImageCollage;