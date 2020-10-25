import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/richtext';
import { DesignSettings } from "../../utils/constants";
import { Colors } from '../../utils/constants';

const ActivitiesWrapper = styled.section`
  margin: 5rem auto;
  width: ${DesignSettings.innerWidth};

  .h1-border-bottom > h1,
  .title-wrapper > .h1-border-bottom > h1 {
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .content-wrapper > p {
    font-size: 2rem;
    margin: 2rem 0;
  }

  .highlighted-text {
    margin: 4rem 0;
  }

  .highlighted-text > p {
    border-left: 3px solid ${Colors.main};
    padding-left: 3rem;
    font-size: 2.4rem;
    line-height: 3.5rem;
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
    }
  }
`;

const Activities = ({ title, content, highlighted_text, content_part_2, link_label }) => {

  return (
    <ActivitiesWrapper>
      <div className="h1-border-bottom">
        <div className="title-wrapper h1-border-bottom">
          <RichTextCustom render={title} />
        </div>

        <div className="content-wrapper">
          <RichTextCustom render={content} />
        </div>

        <div className="highlighted-text">
          <RichTextCustom render={highlighted_text} />
        </div>

        <div className="content-wrapper">
          <RichTextCustom render={content_part_2} />
        </div>

        <div className="button-wrapper">
          <button className="button">{link_label}&gt;</button>
        </div>
      </div>
    </ActivitiesWrapper>
  );
}

export default Activities;