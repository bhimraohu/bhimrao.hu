import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import TitleOnly from './TitleOnly';

const TextWithTitleWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.textWidth};

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100%;
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
        <TitleOnly title={title} />
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