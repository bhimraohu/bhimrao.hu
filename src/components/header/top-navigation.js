import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import { linkResolverBase } from '../../utils/linkResolverBase';
import { Colors, DesignSettings } from "../../utils/constants";
import Icon from "../common/icon";
import BrandingWrapper from "./branding";

const TopNavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  display: flex;
  padding: 5px 0;

  .button-cta {
    border: 1px solid ${Colors.red};
    background-color: ${Colors.red};
    line-height: 45px;

    a {
      color: ${Colors.dirtyWhite};
    }

    &:hover {
      color: ${Colors.red};
      border: 1px solid ${Colors.red};
      background-color: ${Colors.dirtyWhite};

      a {
        color: ${Colors.red};
      }
    }
  }
`;

const NavLinks = styled.ul`
  margin-left: auto;
  display: flex;
  list-style-type: none;
  margin-bottom: 0; 
  height: 66px;
`;

const NavLink = styled.li`
  margin: auto 0;
  height: 45px;
  cursor: pointer;

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
    width: 165px;
  }
  &.projects.en-us {
    width: 165px;
  }

  &:hover a {
    color: ${Colors.red};
  }

  a {
    color: ${Colors.main};
    text-decoration: none;
    padding: 0 16px;
    font-weight: bold;
    font-size: 16px;
    line-height: 45px;
    display: inline-block;
  }

  &:hover{

    ul {
      display: flex;
      flex-flow: column wrap;
      list-style-type: none;
      right: 0%;
      min-width: 100px;

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
  box-shadow: 1px 4px 3px 0px black;
  background-color: white;

  /* Set the width of the submenu per language*/
  &.projects.hu {
    width: 200px;
  }
  &.projects.en-us {
    width: 100px;
  }
`;

const TopNavigation = ({ navigationData }) => (
  <TopNavigationWrapper>
    <BrandingWrapper navigationData={navigationData} />
    <NavLinks>
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
  </TopNavigationWrapper>
)

const getMainNav = (link) => {
  return (
    <NavLink key={link.link._meta.uid} className={link.is_cta ? 'button-cta' : ''}>
      <Link to={linkResolverBase(link.link._meta)}>
        {link.label}
      </Link>
    </NavLink>
  );
}

const getMainAndSubNav = (link, subNav) => {
  return (
    <NavLink key={link.link._meta.uid} className={`${link.submenu} ${link.link._meta.lang}`}>
      <Link to={linkResolverBase(link.link._meta)}>
        {link.label}
        <Icon icon_class={'icon-down'} color={Colors.red} />
      </Link>
      <SubNavLinks className={`${link.submenu} ${link.link._meta.lang}`}>
        {
          subNav.node.sub_navigation_links.map(subLink => {
            return (
              <NavLink key={subLink.link._meta.uid}>
                <Link to={linkResolverBase(subLink.link._meta)}>{subLink.label}</Link>
              </NavLink>
            )
          })
        }
      </SubNavLinks>
    </NavLink>
  );
}

export default TopNavigation;
