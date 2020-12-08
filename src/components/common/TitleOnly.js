import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TitleOnlyWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.textWidth};

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  .content-wrapper > h1 {
    font-size: 3rem;
    margin: 2rem 0;
    text-transform: uppercase;
  }
`;

const TitleOnly = ({ title }) => {

  return (
    <TitleOnlyWrapper>
      <div className="content-wrapper h1-border-bottom common-header">
        {
          title
            ? <RichTextCustom render={title} />
            : null
        }
      </div>
    </TitleOnlyWrapper>
  );
}

export default TitleOnly;