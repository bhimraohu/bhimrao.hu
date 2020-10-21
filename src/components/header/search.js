import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";
import Icon from "../common/icon";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 30rem;
  margin-right: 1.6rem;
  padding-left: 1rem;
  padding-right: 1rem;

  input {
    padding: .5rem;
    border: none;
    width: 30rem;
    font-size: 1.4rem;
    color: ${Colors.main};
  }
`;

const SearchInput = styled.input`
  line-height: 2.2rem;

  &:focus {
    outline: none;
  }
`;

const Search = ({ search_placeholder }) => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder={search_placeholder} />
      <Icon icon_class={'icon-search'} />
    </SearchWrapper>
  )
};

export default Search;
