import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const IntroTextWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};

  > .h1-border-bottom > h1 {
    font-size: 2.8rem;
    font-weight: bold;
  }

> .h1-border-bottom > p {
  font-size: 2rem;
}
`;

const IntroText = ({ title, text }) => {

  return (
    <IntroTextWrapper>
      <div className="h1-border-bottom">
        <RichTextCustom render={title} />
        <RichTextCustom render={text} />
      </div>
    </IntroTextWrapper>
  );
}

export default IntroText;