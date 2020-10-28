import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/richtext';
import { DesignSettings } from "../../utils/constants";

const TextWithTitleWrapper = styled.section`
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
`;

const TextWithTitle = ({ text_title, text_subtitle, text }) => {

  return (
    <TextWithTitleWrapper>
      <div className="h1-border-bottom">
        <div className="title-wrapper h1-border-bottom">
          <RichTextCustom render={text_title} />
        </div>

        {
          text_subtitle
            ? (<div className="content-wrapper">
              <RichTextCustom render={text_subtitle} />
            </div>)
            : null
        }

        <div className="content-wrapper">
          <RichTextCustom render={text} />
        </div>
      </div>
    </TextWithTitleWrapper>
  );
}

export default TextWithTitle;