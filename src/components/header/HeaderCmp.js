import React from "react"
import styled from "styled-components"

import HeaderTopBar from "./HeaderTopBar"
import TopNavigation from "./TopNavigation"

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
