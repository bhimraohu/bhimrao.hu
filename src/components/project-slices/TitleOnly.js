import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TitleOnlyWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};

  .content-wrapper > h1 {
    font-size: 3rem;
    margin: 2rem 0;
    text-transform: uppercase;
  }
`;

const TitleOnly = ({ title }) => {

  return (
    <TitleOnlyWrapper>
      <div className="content-wrapper h1-border-bottom">
        <RichTextCustom render={title} />
      </div>
    </TitleOnlyWrapper>
  );
}

export default TitleOnly;