import React from "react"
import styled from "styled-components"

import { Colors, DesignSettings } from "../../utils/constants";
import LanguageSelector from "./language-selector";
import SocialLinks from "./social-links";
import Search from "./Search";
import Icon from "../common/icon";

const TopBarWrapper = styled.div`
  padding: 1.6rem 0;
  background-color: ${Colors.main};
`;

const TopBarContainer = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  display: flex;
  justify-content: space-between;

  .rightside-container {
  display: flex;
  justify-content: flex-end;
  }

  .icon-container {
    display: flex;
    align-items: center;
    width: 2rem;
    height: inherit;
    margin-right: 3.1rem;
    cursor: pointer;
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

  onKeyPressHandler = (event) => {
    // todo: handle enter
    this.setState({
      ...this.state,
      showSearchInput: true,
    });
  }

  render() {
    return (
      <TopBarWrapper>
        <TopBarContainer>

          <div className="address">
            {this.props.topbarsData.address_label}:
            <a
              href={this.props.topbarsData.address_maps_link}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.topbarsData.address}
            </a>
          </div>

          <div className="rightside-container">
            {
              this.state.showSearchInput
                ? <Search search_placeholder={this.props.topbarsData.search_placeholder} onBlur={this.onBlurHandler} />
                : (
                  <div className="icon-container" onClick={this.onClickHandler} role="button" onKeyPress={this.onKeyPressHandler}>
                    <Icon icon_class={'icon-search'} color={Colors.dirtyWhite} />
                  </div>
                )
            }
            <SocialLinks links={this.props.topbarsData.social_links} />
            {
              this.props.topbarsData.multilanguage_enabled
                ? <LanguageSelector data={this.props.topbarsData} />
                : null
            }
          </div>
        </TopBarContainer>
      </TopBarWrapper>
    )
  }
}

export default HeaderTopBar
