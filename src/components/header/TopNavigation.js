import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components';

import { linkResolverBase } from '../../utils/linkResolverBase';
import { Colors, DesignSettings } from '../../utils/constants';
import Icon from '../common/IconCmp';
import BrandingWrapper from './BrandingCmp';
import MenuIcon from './MenuIcon';

const TopNavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  padding: .5rem 0;

  .main-container {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .button-cta {
    border: .1rem solid ${Colors.red};
    background-color: ${Colors.red};
    line-height: 4.5rem;
    
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
  height: 4.7rem;
  cursor: pointer;
  
  @media screen and (max-width: 950px) {
    border-top: 1px solid ${Colors.lightGrey};
  
    &:nth-child(2) {
      border-bottom: 1px solid ${Colors.lightGrey};
    }

    &:nth-child(3) {
      border-top: none;
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
    width: 16.5rem;
  }
  &.projects.en-us {
    width: 14.5rem;
  }

  &:hover a {
    color: ${Colors.red};
  }

  a {
    color: ${Colors.main};
    text-decoration: none;
    padding: 0 1.6rem;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 4.5rem;
    display: inline-block;
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

  /* Set the width of the submenu per language*/
  &.projects.hu {
    width: 20rem;
  }
  &.projects.en-us {
    width: 20rem;
  }
`;

const TopNavigation = ({ navigationData }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <TopNavigationWrapper>
      <div className="main-container">
        <BrandingWrapper navigationData={navigationData} />
        {
          getMenu(navigationData, false)
        }
        <div className="mobile">
          <button className="menu-toggle-button" onClick={toggleMenu}>
            <MenuIcon menuOpen={menuOpen} />
          </button>
        </div>
      </div>
      {
        menuOpen
          ? getMenu(navigationData, true)
          : null
      }
    </TopNavigationWrapper>
  )
}

const getMenu = (navigationData, mobile) => {
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
              return getMainAndSubNav(link, subNav);
            }
            return getMainNav(link);
          })
      }
    </NavLinks>
  )
}

const getMainNav = (link) => {
  return (
    <NavLink key={link.link._meta.uid} className={link.is_cta ? 'desktop button-cta' : ''}>
      <Link
        to={linkResolverBase(link.link._meta)}
        className={getSelectedClassName(link.link._meta)}
      >
        {link.label}
      </Link>
    </NavLink>
  );
}

const getMainAndSubNav = (link, subNav) => {
  return (
    <NavLink key={link.link._meta.uid} className={`${link.submenu} ${link.link._meta.lang}`}>
      <Link
        to={linkResolverBase(link.link._meta)}
        className={getSelectedClassName(link.link._meta)}
      >
        <span>{link.label}</span>
        <Icon style="padding-right: 2rem" icon_class={'icon-down'} color={Colors.red} />
      </Link>
      <SubNavLinks className={`${link.submenu} ${link.link._meta.lang}`}>
        {
          subNav.node.sub_navigation_links.map(subLink => {
            return (
              <NavLink key={subLink.link._meta.uid}>
                <Link
                  to={linkResolverBase(subLink.link._meta)}
                  className={getSelectedClassName(subLink.link._meta)}
                >
                  {subLink.label}
                </Link>
              </NavLink>
            )
          })
        }
      </SubNavLinks>
    </NavLink>
  );
}

const getSelectedClassName = (meta) => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window?.location.pathname.indexOf(linkResolverBase(meta)) > -1 ? 'selected' : '';
}

export default TopNavigation;
