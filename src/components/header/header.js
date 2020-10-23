import React from "react"
import styled from "styled-components"

import HeaderTopBar from "./header-top-bar"
import TopNavigation from "./top-navigation"

const HeaderWrapper = styled.header`
  margin-bottom: 1.5rem; 
  box-shadow: 0px 0px 3px black;
`;

const Header = ({ navigationData }) => (
  <HeaderWrapper>
    <HeaderTopBar topbarsData={navigationData.allHeader_topbars} />
    <TopNavigation navigationData={navigationData} />
  </HeaderWrapper>
)

export default Header
