import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import RichTextCustom from '../common/RichTextCustom';
import Icon from '../common/IconCmp';

const ImageCollageWithTextWrapper = styled.section`
  margin-top: 10rem !important;
  margin-bottom: 10rem !important;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }
  
  @media screen and (max-width: 950px) {
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;

    .image-collage-wrapper {
      width: 100% !important;
      
      .image-collage-container {
        flex-direction: column !important;

        .big-image {
          max-width: 100% !important;
          width: 100% !important;
        }

        .small-images {
          width: 100% !important;
          margin-left: 0 !important;
          flex-direction: ${props => props.description_position === 'top' ? 'column' : 'column-reverse'} !important;

          .small-image {
            height: initial !important;
          }
          .content-wrapper {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }
      }
    }
  }
  
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
          max-width: 48%;
        }
        
        .small-images {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 2%;

          > img {
            height: 47%;
          }

          .content-wrapper {
            background-color: ${Colors.red};
            height: 47%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 2.2rem;
            font-style: italic;
            color: ${Colors.dirtyWhite};
            text-transform: uppercase;
            padding: 0 4rem;
            line-height: 160%;
          }
        }
      }
    }
  }
`;

const ImageCollageWithText = ({
  collage_description, collage_title, description_position, image_big, image_small
}) => {

  return (
    <ImageCollageWithTextWrapper description_position={description_position}>
      <div className="image-collage-wrapper">
        <div className="image-collage-container left">
          <img className="big-image" src={image_big.url} alt={image_big.alt} />
          <div className="small-images">
            {
              description_position === 'top'
                ? textTop(image_small, collage_title, collage_description)
                : textDown(image_small, collage_title, collage_description)
            }
          </div>
        </div>
      </div>
    </ImageCollageWithTextWrapper>
  );
}

const textTop = (image_small, collage_title, collage_description) => {
  return (
    <>
      <div className="content-wrapper">
        {
          collage_title[0].text === `"`
            ? <Icon icon_class={'icon-quote'} color={Colors.dirtyWhite} size={'3rem'} />
            : <RichTextCustom render={collage_title} />
        }
        <RichTextCustom render={collage_description} />
      </div>
      <img className="small-image" src={image_small.url} alt={image_small.alt} />
    </>
  )
}

const textDown = (image_small, collage_title, collage_description) => {
  return (
    <>
      <img className="small-image" src={image_small.url} alt={image_small.alt} />
      <div className="content-wrapper">
        {
          collage_title[0].text === `"`
            ? <Icon icon_class={'icon-quote'} color={Colors.dirtyWhite} size={'3rem'} />
            : <RichTextCustom render={collage_title} />
        }
        <RichTextCustom render={collage_description} />
      </div>
    </>
  )
}

export default ImageCollageWithText;