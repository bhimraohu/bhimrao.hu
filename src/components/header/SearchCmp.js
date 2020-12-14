import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { Colors } from '../../utils/constants';
import Icon from '../common/IconCmp';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 30rem;
  margin-right: 1.6rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 950px) {
    width: initial !important;

    input {
      width: initial !important;
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 28rem;
  }
`;

const SearchInput = styled.input`
  line-height: 2.2rem;
  padding: .5rem;
  border: none;
  width: 30rem;
  font-size: 1.4rem;
  color: ${Colors.main};

  &:focus {
    outline: none;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: this.props.value ? this.props.value : '',
    };
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  getPath = () => {
    const path = window?.location.pathname.indexOf('/en-us') === 0
      ? `/en-us/search`
      : `/kereses`;

    return `${path}?search=${this.state.searchValue}`;
  }

  handleInputChange = (event) => {
    const value = event?.target?.value;

    this.setState({
      searchValue: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchPath = this.getPath()
    navigate(searchPath);
  }

  render() {
    return (
      <SearchWrapper>
        <form
          name="search"
          onSubmit={this.handleSubmit}
        >
          <SearchInput
            type="text"
            name="search"
            placeholder={this.props.search_placeholder}
            onBlur={this.props.onBlur}
            ref={inputEl => (this.searchInput = inputEl)}
            value={this.state.searchValue}
            onChange={this.handleInputChange}
          />
          <Icon icon_class={'icon-search'} />
        </form>
      </SearchWrapper>
    )
  }
};

export default Search;
