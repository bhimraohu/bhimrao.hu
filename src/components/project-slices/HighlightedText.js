import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/richtext';
import { Colors, DesignSettings } from "../../utils/constants";

const HighlightedTextWrapper = styled.section`
  margin: 5rem auto;
  width: ${DesignSettings.innerWidth};

  .highlighted-text {
    margin: 4rem 0;
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
    <HighlightedTextWrapper>
      <div className="highlighted-text">
        <RichTextCustom render={highlighted_text} />
      </div>
    </HighlightedTextWrapper>
  );
}

export default HighlightedText;