import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components';

import { linkResolverBase } from '../../utils/linkResolverBase';
import { Colors, DesignSettings } from '../../utils/constants';
import Icon from '../common/IconCmp';
import BrandingWrapper from './BrandingCmp';
import MenuIcon from './MenuIcon';

const TopNavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  padding: 1rem 0;

  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  .button-cta {
    border: .1rem solid ${Colors.red};
    background-color: ${Colors.red};
    line-height: 4.5rem;
    margin-left: 1.5rem;
    
    a {
      min-width: 17rem;
      text-align: center;
      color: ${Colors.dirtyWhite};
    }

    &:hover {
      color: ${Colors.red};
      background-color: white;

      a {
        color: ${Colors.red};
      }
    }

    a.selected {
      background-color: ${Colors.red};
      color: ${Colors.dirtyWhite};

      &:hover {
      color: ${Colors.red};
      background-color: white;
    }
    }
  }
  
  .menu-toggle-button {
    display: none;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 950px) {
    
    .mobile {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      z-index: 20;
      background-color: white;
    }

    .menu-toggle-button {
      display: flex;
      align-items: center;
      padding: 0 2rem;
      background-color: white;
      border: none;
      height: 6.6rem;
      width: 8.2rem;

      &:focus {
        outline: none;
      }
    }

    .desktop {
      display: none;
    }
  }
`;

const NavLinks = styled.ul`
  margin-left: auto;
  display: flex;
  list-style-type: none;
  margin-bottom: 0; 
  
  &.desktop {
    height: 6.6rem;
  }
`;

const NavLink = styled.li`
  margin: auto 0;
  height: 6rem;
  cursor: pointer;
  
  @media screen and (max-width: 950px) {
    border-top: 1px solid ${Colors.lightGrey};
  
    &:nth-child(2) {
      border-bottom: 1px solid ${Colors.lightGrey};
    }

    &:nth-child(3) {
      border-top: none;
    }
    
    /* Set the width of the menu item with submenu per language*/
    &.projects.hu {
      width: 100% !important;
      height: auto !important;
    }
    &.projects.en-us {
      width: 100% !important;
      height: auto !important;
    }

    .mobile-icon {
      width: 5rem;
      display: flex;
      justify-content: center;
      outline: none;

      > span i::before {
        transform: rotate(0deg) !important;
        transition: transform .5s !important;
      }
    }

    .mobile-icon.open {
      > span i::before {
        transform: rotate(180deg) !important;
        transition: transform .5s !important;
      }
    }

    a {
      padding: 0 !important;
    }
  }

  span i::before {
    transform: rotate(0deg);
    transition: transform .5s;
  }
  &:hover span i::before {
    transform: rotate(180deg);
    transition: transform .5s;
  }

  /* Set the width of the menu item with submenu per language*/
  &.projects.hu {
    width: 17.5rem;
  }
  &.projects.en-us {
    width: 17.5rem;
  }

  &.projects.hu,
  &.projects.en-us {
    a {
      display: flex;
      justify-content: space-between;

      &:nth-child(2) {
        width: 5rem;
        text-align: right;
      }
    }
  }

  &:hover a {
    color: ${Colors.red};
  }

  a {
    color: ${Colors.main};
    text-decoration: none;
    padding: 0 2.5rem;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 5.8rem;
    display: inline-block;
    width: 100%;
  }

  a.selected {
    color: ${Colors.red};
  }

  &:hover{

    ul {
      display: flex;
      flex-flow: column wrap;
      list-style-type: none;
      right: 0%;
      min-width: 10rem;
      z-index: 2;

      a {
        color: ${Colors.main};

        &:hover {
          color: ${Colors.red};
        }
      }
    }
  }
`;

const SubNavLinks = styled.ul`
  display: none;
  position: relative;
  height: auto;
  box-shadow: 1px 2px 2px 0px ${Colors.main};
  background-color: white;

  @media screen and (max-width: 950px) {
    /* Set the width of the submenu per language*/
    &.projects.hu {
      width: 100% !important;
    }
    &.projects.en-us {
      width: 100% !important;
    }

    a {
      padding-left: 2rem !important;
    }
  }

  /* Set the width of the submenu per language*/
  &.projects.hu {
    width: 33rem;
  }
  &.projects.en-us {
    width: 33rem;
  }
`;

class TopNavigation extends React.Component {

  constructor() {
    super();

    this.state = {
      menuOpen: false,
      subMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen,
    })
  }

  toggleSubMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState((state) => {
      return {
        subMenuOpen: !state.subMenuOpen,
      }
    })
  }

  render() {
    return (
      <TopNavigationWrapper>
        <div className="main-container">
          <BrandingWrapper navigationData={this.props.navigationData} />
          {
            this.getMenu(this.props.navigationData, false)
          }
          <div className="mobile">
            <button className="menu-toggle-button" onClick={this.toggleMenu}>
              <MenuIcon menuOpen={this.state.menuOpen} />
            </button>
          </div>
        </div>
        {
          this.state.menuOpen
            ? this.getMenu(this.props.navigationData, true, this.toggleSubMenu, this.state.subMenuOpen)
            : null
        }
      </TopNavigationWrapper>
    )
  }

  getMenu = (navigationData, mobile, toggleSubMenu, subMenuOpen) => {
    return (
      <NavLinks className={mobile ? 'mobile-menu' : 'desktop'}>
        {
          navigationData.allHeader_navbars.navigation_links.map(
            (link) => {
              // check if sub nav exists here
              const subNav = navigationData.allHeader_navigation_submenus.edges.find(edge => {
                return edge.node.parent === link.submenu;
              });
              if (subNav) {
                return this.getMainAndSubNav(link, subNav, mobile, toggleSubMenu, subMenuOpen);
              }
              return this.getMainNav(link);
            })
        }
      </NavLinks>
    )
  }

  getMainNav = (link) => {
    return (
      <NavLink key={link.link._meta.uid} className={link.is_cta ? 'button-cta' : ''}>
        <Link
          to={linkResolverBase(link.link._meta)}
          className={this.getSelectedClassName(link.link._meta)}
        >
          {link.label}
        </Link>
      </NavLink>
    );
  }

  getMainAndSubNav = (link, subNav, mobile, toggleSubMenu, subMenuOpen) => {
    return (
      <NavLink key={link.link._meta.uid} className={`${link.submenu} ${link.link._meta.lang}`}>
        <Link
          to={linkResolverBase(link.link._meta)}
          className={this.getSelectedClassName(link.link._meta)}
        >
          <span>{link.label}</span>
          <span
            onClick={toggleSubMenu}
            className={this.state.subMenuOpen ? "mobile-icon open" : "mobile-icon"}
            role="button"
            onKeyPress={this.onKeyPressHandler}
            tabIndex={-1}
          >
            <Icon
              style={{ paddingRight: '2rem' }}
              icon_class={'icon-down'}
              color={Colors.red}
            />
          </span>
        </Link>
        {
          mobile
            ? subMenuOpen ? this.getSubMenu(link, subNav) : null
            : this.getSubMenu(link, subNav)
        }
      </NavLink>
    );
  }

  getSubMenu = (link, subNav) => {
    return (
      <SubNavLinks className={`${link.submenu} ${link.link._meta.lang}`}>
        {
          subNav.node.sub_navigation_links.map(subLink => {
            return (
              <NavLink key={subLink.link._meta.uid}>
                <Link
                  to={linkResolverBase(subLink.link._meta)}
                  className={this.getSelectedClassName(subLink.link._meta)}
                >
                  {subLink.label}
                </Link>
              </NavLink>
            )
          })
        }
      </SubNavLinks>
    )
  }

  getSelectedClassName = (meta) => {
    if (typeof window === 'undefined') {
      return '';
    }
    console.log(`%c${linkResolverBase(meta)}`, 'background: red; color: white; padding: 5px;')
    console.log(window?.location.pathname)
    console.log(window?.location.pathname.indexOf(linkResolverBase(meta)))
    console.log(window?.location.pathname.indexOf(linkResolverBase(meta)) > -1 ? 'selected' : '')
    return window?.location.pathname.indexOf(linkResolverBase(meta)) > -1 ? 'selected' : '';
  }

  onKeyPressHandler = () => {
    // do nothing here now
  }
}

export default TopNavigation;
