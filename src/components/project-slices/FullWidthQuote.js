import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import Icon from '../common/IconCmp';

const FullWidthQuoteWrapper = styled.section`
  width: 100%;
  background: ${Colors.main};
  
  /* .content-wrapper > p {
    font-size: 2rem;
    margin: 2rem 0;
  } */
  `;

const TextContainer = styled.div`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};
  padding: 5rem 0;
  text-transform: uppercase;
  
  > p {
    color: ${Colors.dirtyWhite} !important;
    font-size: 2.4rem;
    line-height: 160%;
  }
`;

const FullWidthQuote = ({ text }) => {
  return (
    <FullWidthQuoteWrapper>
      <div className="content-wrapper">
        <TextContainer>
          <Icon icon_class={'icon-quote'} color={Colors.dirtyWhite} size={'3rem'} />
          <RichTextCustom render={text} />
        </TextContainer>
      </div>
    </FullWidthQuoteWrapper>
  );
}

export default FullWidthQuote;