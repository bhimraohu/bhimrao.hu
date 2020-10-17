import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";
import Icon from "../common/icon";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 300px;
  margin-right: 16px;
  padding-left: 10px;
  padding-right: 10px;

  input {
    padding: 5px;
    border: none;
    width: 300px;
    color: ${Colors.main};
  }
`;

const SearchInput = styled.input`
  line-height: 1.4rem;

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
