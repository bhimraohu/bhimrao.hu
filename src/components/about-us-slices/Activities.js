import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import TextWithTitle from '../common/TextWithTitle';
import HighlightedText from '../common/HighlightedText';
import TextOnly from '../common/TextOnly';

const ActivitiesWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.textWidth};
  margin-bottom: 5rem;

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

const Activities = ({ title, content, highlighted_text, content_part_2, link, link_label }) => {

  return (
    <ActivitiesWrapper>
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
    </ActivitiesWrapper>
  );
}

export default Activities;