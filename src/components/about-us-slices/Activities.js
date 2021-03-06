import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import TextWithTitle from '../common/TextWithTitle';
import HighlightedText from '../common/HighlightedText';
import TextOnly from '../common/TextOnly';

const ActivitiesWrapper = styled.section`
  background-image: ${(props) => {
    if (props.cornerImage) {
      return `url(${props.cornerImage.substring(0, props.cornerImage.indexOf('?'))})`;
    }
    return '';
  }};
  background-position: ${(props) => {
    if (props.cornerImagePosition) {
      return props.cornerImagePosition.replace('-', ' ')
    }
    return '';
  }};
  background-repeat: no-repeat;
`;

const ActivitiesContainer = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.textWidth};
  margin-bottom: 5rem;

  @media screen and (max-width: 1300px) {
   .button-wrapper {
      padding-left: ${DesignSettings.mobilePaddingLeft};
      padding-right: ${DesignSettings.mobilePaddingRight};
    }
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;

    .button {
      color: ${Colors.red};
      font-size: 2rem;
      font-weight: bold;
      background: none;
      border: none;
      padding-left: 0;
      text-decoration: none;

      &:focus {
        outline: none;
      }

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Activities = ({ title, content, highlighted_text, content_part_2, link, link_label, corner_image, corner_image_position }) => {
  return (
    <ActivitiesWrapper cornerImage={corner_image?.url} cornerImagePosition={corner_image_position}>
      <ActivitiesContainer>
        <div className="h1-border-bottom">
          <TextWithTitle
            title={title}
            text={content}
          />

          <HighlightedText
            highlighted_text={highlighted_text}
          />

          <TextOnly
            text={content_part_2}
          />

          <div className="button-wrapper">
            <a className="button" href={link.url} target="_blank" alt={link_label} rel="noreferrer">{link_label}&gt;</a>
          </div>
        </div>
      </ActivitiesContainer>
    </ActivitiesWrapper>
  );
}

export default Activities;