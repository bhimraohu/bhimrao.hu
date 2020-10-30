import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors } from "../../utils/constants";
import Icon from '../common/Icon';

const ImageWithDescriptionWrapper = styled.section`

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
  padding: 0 5rem;
  text-transform: uppercase;
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