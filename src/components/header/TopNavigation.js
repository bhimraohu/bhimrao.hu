import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import { linkResolverBase } from '../../utils/linkResolverBase';
import { Colors, DesignSettings } from "../../utils/constants";
import Icon from "../common/IconCmp";
import BrandingWrapper from "./BrandingCmp";

const TopNavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  display: flex;
  padding: .5rem 0;

  .button-cta {
    border: .1rem solid ${Colors.red};
    background-color: ${Colors.red};
    line-height: 4.5rem;

    a {
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
`;

const NavLinks = styled.ul`
  margin-left: auto;
  display: flex;
  list-style-type: none;
  margin-bottom: 0; 
  height: 6.6rem;
`;

const NavLink = styled.li`
  margin: auto 0;
  height: 4.7rem;
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
  box-shadow: 1px 4px 3px 0px black;
  background-color: white;

  /* Set the width of the submenu per language*/
  &.projects.hu {
    width: 20rem;
  }
  &.projects.en-us {
    width: 20rem;
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
        {link.label}
        <Icon icon_class={'icon-down'} color={Colors.red} />
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
  if (typeof window === "undefined") {
    return '';
  }
  return window?.location.pathname.indexOf(linkResolverBase(meta)) > -1 ? 'selected' : '';
}
export default TopNavigation;
