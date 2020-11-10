import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors } from "../../utils/constants";
import Icon from '../common/IconCmp';

const ImageWithDescriptionWrapper = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 610px) {
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
    width: 100% !important;

    .row.a {
      flex-direction: column !important;
      margin-bottom: 3rem;
    }

    .row.b {
      flex-direction: column-reverse !important;
    }

    .row div {
      width: 100% !important;
    }
  }

  .content-wrapper  {
    font-size: 2rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: row;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
      }

      &.a > div > p {
        color: #DEDBCB;
      }

      &.a > div i:before {
        color: #DEDBCB;
      }
    }
  }
`;

const TextContainer = styled.div`
  background-color: ${props => props.background_color};
  padding: 0 10rem;
  line-height: 160%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    padding: 4rem !important;
  }

  @media screen and (max-width: 700px) {
    padding: 2rem !important;
  }

  @media screen and (max-width: 600px) {
    padding: 4rem !important;
  }
`;

const ImageWithDescription = ({ background_color_a, background_color_b, description_a, description_b, icon_a, icon_b, image_a, image_b }) => {

  return (
    <ImageWithDescriptionWrapper >
      <div className="content-wrapper">
        <div className="row a">
          {getImage(image_a)}
          {getText(background_color_a, description_a, icon_a)}
        </div>
        {
          background_color_b && description_b && icon_b && image_b
            ? <div className="row b">
              {getText(background_color_b, description_b, icon_b)}
              {getImage(image_b)}
            </div>
            : null
        }
      </div>
    </ImageWithDescriptionWrapper>
  );
}

const getImage = (image) => {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
    </div>
  )
}

const getText = (background_color, description) => {
  return (
    <TextContainer background_color={background_color}>
      <Icon icon_class={'icon-quote'} color={Colors.main} size={'3rem'} />
      <RichTextCustom render={description} />
    </TextContainer>
  )
}

export default ImageWithDescription;