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

const onClickHandler = (meta, targetLanguage) => {
  console.log(meta);
  if (targetLanguage === meta.alternateLanguages[0].lang) {
    if (window.location.pathname.indexOf(meta.alternateLanguages[0].lang) === -1) {
      // add lang to path
      window.location.href = `/${meta.alternateLanguages[0].lang}${window.location.pathname}`;
    }
  }
  else {
    if (window.location.pathname.indexOf(meta.alternateLanguages[0].lang) === 0) {
      window.location.href = window.location.pathname.replace(`/${meta.alternateLanguages[0].lang}`, '');
    }
  }
}

const LanguageSelector = ({ data }) => {
  return (
    <LanguageSelectorWrapper>
      <div onClick={onClickHandler.bind(this, data._meta, data.lang)}>
        <Button>{data.language_main}</Button>
      </div>
      <div onClick={onClickHandler.bind(this, data._meta, data._meta.alternateLanguages[0].lang)}>
        <Button>{data.language_second}</Button>
      </div>
    </LanguageSelectorWrapper >
  )
};

export default LanguageSelector;
