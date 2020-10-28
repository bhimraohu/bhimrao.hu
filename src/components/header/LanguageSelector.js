import React from "react"
import styled from "styled-components"
import { navigate } from 'gatsby'

import { Colors } from "../../utils/constants";
import { defaultLanguage, langs } from '../../../prismic-config'

const LanguageSelectorWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 1rem 1.6rem;
  color: ${Colors.dirtyWhite};
  background-color: transparent;
  border: none;
  font-size: 1.6rem;

  &:hover {
    color: ${Colors.red};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const onClickHandler = (meta, targetLanguage) => {
  languageChange(meta, targetLanguage);
}

const languageChange = (meta, targetLanguage) => {
  if (targetLanguage === meta.lang) {
    return;
  }

  // TODO 1. query the navigation data (both language)
  // TODO 2. find the current path
  // TODO 3. find the same index in the other language
  if (targetLanguage === defaultLanguage) {
    navigate(window.location.pathname.replace(`/${langs[1]}`, ''));
  }
  else {
    navigate(`/${targetLanguage}${window.location.pathname}`);
  }
}

const LanguageSelector = ({ data }) => {
  const currentLang = data._meta.lang

  return (
    <LanguageSelectorWrapper>
      {
        currentLang !== defaultLanguage
          ?
          <Button onClick={onClickHandler.bind(this, data._meta, langs[0])}>
            {data.language_main}
          </Button>
          :
          <Button onClick={onClickHandler.bind(this, data._meta, langs[1])}>
            {data.language_second}
          </Button>
      }
    </LanguageSelectorWrapper >
  )
};

export default LanguageSelector;
