import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TextOnlyWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.textWidth};

  .content-wrapper > p {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

const TextOnly = ({ text }) => {

  return (
    <TextOnlyWrapper>
      <div className="content-wrapper common-text">
        <RichTextCustom render={text} />
      </div>
    </TextOnlyWrapper>
  );
}

export default TextOnly;