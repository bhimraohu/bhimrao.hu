import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";

const HighlightedTextWrapper = styled.section`
  padding: ${props => props.background_color ? '3rem auto' : '0 auto'};
  background-color: ${props => props.background_color};

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    .highlighted-text-container {
      width: 100% !important;
    }
  }
  
  .highlighted-text-container {
    margin: 0 auto;
    padding: ${props => props.background_color ? '1rem 0' : '0 auto'};
    width: ${DesignSettings.textWidth};
  }

  .highlighted-text {
    margin: 2rem 0;
  }

  .highlighted-text > p {
    border-left: 3px solid ${Colors.main};
    padding-left: 3rem;
    font-size: 2.4rem;
    line-height: 3.5rem;
  }
`;

const HighlightedText = ({ background_color, highlighted_text }) => {

  return (
    <HighlightedTextWrapper background_color={background_color}>
      <div className="highlighted-text-container">
        <div className="highlighted-text common-text">
          <RichTextCustom render={highlighted_text} />
        </div>
      </div>
    </HighlightedTextWrapper>
  );
}

export default HighlightedText;