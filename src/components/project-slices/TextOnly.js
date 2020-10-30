import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TextOnlyWrapper = styled.section`
  margin: 5rem auto;
  width: ${DesignSettings.innerWidth};

  .content-wrapper > p {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

const TextOnly = ({ text }) => {

  return (
    <TextOnlyWrapper>
      <div className="content-wrapper">
        <RichTextCustom render={text} />
      </div>
    </TextOnlyWrapper>
  );
}

export default TextOnly;