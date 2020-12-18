import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import Icon from '../common/IconCmp';

const FullWidthQuoteWrapper = styled.section`
  width: 100%;
  background: ${Colors.main};
  margin: 5rem auto;
`;

const TextContainer = styled.div`

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100% !important;
  }
  
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