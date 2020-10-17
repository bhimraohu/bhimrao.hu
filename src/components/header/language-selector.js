import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";

const LanguageSelectorWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  padding: 10px 16px;
  color: ${Colors.dirtyWhite};
  background-color: transparent;
  border: none;

  &:hover {
    color: ${Colors.red};
    cursor: pointer;
  }
`;

const LanguageSelector = ({ data }) => {
  return (
    <LanguageSelectorWrapper>
      <div>
        <Button>{data.language_main}</Button>
      </div>
      <div>
        <Button>{data.language_second}</Button>
      </div>
    </LanguageSelectorWrapper>
  )
};

export default LanguageSelector;
