import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";

const TextWithTitleWrapper = styled.section`
  margin: 3rem auto;
  width: ${props => props.isHomepage ? DesignSettings.innerWidth : DesignSettings.textWidth};

  .h1-border-bottom > h1,
  .title-wrapper > .h1-border-bottom > h1 {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .content-wrapper > h2 {
    color: ${props => props.closed ? Colors.red : Colors.headerColor};
    font-size: 2rem;
    font-weight: 500;
  }

  .content-wrapper > p {
    margin: 2rem 0;
  }
`;

const TextWithTitle = ({ title, subtitle, text, isHomepage, closed }) => {

  return (
    <TextWithTitleWrapper isHomepage={isHomepage} closed={closed}>
      <div className="h1-border-bottom">
        <div className="title-wrapper h1-border-bottom common-header">
          <RichTextCustom render={title} />
        </div>

        {
          subtitle
            ? (<div className="content-wrapper common-header">
              <RichTextCustom render={subtitle} />
            </div>)
            : null
        }

        <div className="content-wrapper common-text">
          <RichTextCustom render={text} />
        </div>
      </div>
    </TextWithTitleWrapper>
  );
}

export default TextWithTitle;