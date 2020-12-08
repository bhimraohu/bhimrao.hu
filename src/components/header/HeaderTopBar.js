import React from "react"
import styled from "styled-components"

import { Colors, DesignSettings } from "../../utils/constants";
import LanguageSelector from "./LanguageSelector";
import SocialLinks from "./SocialLinks";
import Search from "./SearchCmp";
import Icon from "../common/IconCmp";

const TopBarWrapper = styled.div`
  padding: 2rem 0;
  background-color: ${Colors.main};

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    width: 100%;

    .address-text {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .rightside-container {
      display: none !important;
    }

    .rightside-container-mobile {
      display: flex !important;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      .top-row {
        display: flex;
        justify-content: center;
      }

      .bottom-row {
        display: flex;

        button {
          padding-left: 0
        }
      }
    }
    .address {
      display: none;
    }
  }
`;

const TopBarContainer = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }

  .rightside-container {
    display: flex;
    justify-content: flex-end;
  }

  .rightside-container-mobile {
    display: none;
  }

  .icon-container {
    display: flex;
    align-items: center;
    width: 2rem;
    height: inherit;
    margin-right: 3.1rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .address {
    color: ${Colors.dirtyWhite};
    font-size: 1.6rem;
    height: inherit;
    align-self: center;
    
    a {
      padding: 0 1rem;
      font-weight: bold;
      color: ${Colors.dirtyWhite};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

class HeaderTopBar extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showSearchInput: false,
    }
  }

  onClickHandler = () => {
    this.setState({
      ...this.state,
      showSearchInput: true,
    });
  }

  onBlurHandler = () => {
    this.setState({
      ...this.state,
      showSearchInput: false,
    });
  }

  render() {
    return (
      <TopBarWrapper>
        <TopBarContainer>
          <div className="address">
            <a
              className="address-text"
              href={this.props.topbarsData.address_maps_link}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.topbarsData.address}
            </a>
          </div>

          <div className="rightside-container">
            {getSerach(this.state, this.props, this.onBlurHandler, this.onClickHandler, false)}
            {getSocialLinks(this.props)}
            {getLanguageSelector(this.props)}
          </div>

          <div className="rightside-container-mobile">
            {getSerach(this.state, this.props, this.onBlurHandler, this.onClickHandler, true)}
            {getSocialLinks(this.props)}
            {getLanguageSelector(this.props)}
          </div>
        </TopBarContainer>
      </TopBarWrapper>
    )
  }
}

const getSerach = (state, props, onBlurHandler, onClickHandler, mobile) => {
  if (mobile) {
    return (
      <Search search_placeholder={props.topbarsData.search_placeholder} onBlur={onBlurHandler} />
    )
  }

  return (
    state.showSearchInput
      ? <Search search_placeholder={props.topbarsData.search_placeholder} onBlur={onBlurHandler} />
      : (
        <div
          className="icon-container"
          onClick={onClickHandler}
          role="button"
          tabIndex="0"
        >
          <Icon icon_class={'icon-search'} color={Colors.dirtyWhite} />
        </div>
      )
  )
}

const getSocialLinks = (props) => {
  return (
    <SocialLinks links={props.topbarsData.social_links} />
  )
}

const getLanguageSelector = (props) => {
  return (
    props.topbarsData.multilanguage_enabled
      ? <LanguageSelector data={props.topbarsData} />
      : null
  )
}

export default HeaderTopBar
