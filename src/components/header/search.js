import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";
import Icon from "../common/Icon";

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

class Search extends React.Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    return (
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder={this.props.search_placeholder}
          onBlur={this.props.onBlur}
          ref={inputEl => (this.searchInput = inputEl)}
        />
        <Icon icon_class={'icon-search'} />
      </SearchWrapper>
    )
  }
};

export default Search;
