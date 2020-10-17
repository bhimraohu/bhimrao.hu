import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import { linkResolverBase } from '../../utils/linkResolverBase';
import { Colors } from "../../utils/constants";

const NavLink = styled.li`
  margin: auto 0;

  a {
    color: ${Colors.main};
    text-decoration: none;
    padding: 0 16px;
    font-weight: bold;
    font-size: 16px;
    line-height: 66px;
    
    &:hover{
      color: ${Colors.red};
    }
  }

  &:hover{

    ul {
      display: flex;
      flex-flow: column wrap;
      position: absolute;
      list-style-type: none;
      right: 0%;
      min-width: 100px;
    }
  }
`;

const NavLinks = styled.ul`
  margin-left: auto;
  display: flex;
  list-style-type: none;
  margin-bottom: 0; 
`;

const SubNavLinks = styled.ul`
  display: none;
  position: relative;
  height: auto;
  background: black;
`;

const Branding = styled.div`
  a {
    text-decoration: none;
    color: ${Colors.main};
    font-size: 20 px;
    font-weight: bold;
    line-height: 64px;
  }
`;

const TopNavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
`;

const TopNavigation = ({ navigationData }) => (
  <TopNavigationWrapper>
    <Branding>
      <Link to="/">
        {/* <img className="logo" src={logo} alt="Site logo" /> */}
        {navigationData.allHeader_navbars.branding}
      </Link>
    </Branding>
    <NavLinks>
      {
        navigationData.allHeader_navbars.navigation_links.map(
          (link) => {
            // check if sub nav exists here
            // const subNav = navigationData.allSubNavigations.edges.find(edge => {
            //   return edge.node.parent === link.label;
            // });
            let subNav
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
    <NavLink key={link.link._meta.uid}>
      <Link to={linkResolverBase(link.link._meta)}>
        {link.label}
      </Link>
    </NavLink>
  );
}

const getMainAndSubNav = (link, subNav) => {
  return (
    <NavLink key={link.link._meta.uid}>
      <Link to={linkResolverBase(link.link._meta)}>
        {link.label}
        <SubNavLinks>
          {
            subNav.node.sub_navigation.map(subLink => {
              return (
                <NavLink key={subLink.link._meta.uid}>
                  <Link to={linkResolverBase(subLink.link._meta)}>{subLink.label}</Link>
                </NavLink>
              )
            })
          }
        </SubNavLinks>
      </Link>
    </NavLink>
  );
}

export default TopNavigation;
