import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TextOnlyWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.textWidth};
  margin-bottom: ${(props) => props.isLastSlice ? '10rem' : '0'};

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  .content-wrapper > p {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

const TextOnly = ({ text, isLastSlice }) => {

  return (
    <TextOnlyWrapper isLastSlice={isLastSlice}>
      <div className="content-wrapper common-text">
        {
          text
            ? <RichTextCustom render={text} />
            : null
        }
      </div>
    </TextOnlyWrapper>
  );
}

export default TextOnly;