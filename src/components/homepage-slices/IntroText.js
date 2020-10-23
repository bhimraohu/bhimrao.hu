import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/richtext';
import { DesignSettings } from "../../utils/constants";

const IntroTextWrapper = styled.section`
  margin: 5rem auto;
  width: ${DesignSettings.innerWidth};
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