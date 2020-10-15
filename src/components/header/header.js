import React from "react"
import styled from "styled-components"

import HeaderTopBar from "./header-top-bar"
import TopNavigation from "./top-navigation"

const HeaderWrapper = styled.header`
  margin-bottom: 1.05rem;
`;

const Header = ({ navigationData }) => (
  <HeaderWrapper>
    <HeaderTopBar topbarsData={navigationData.allHeader_topbars} />
    <TopNavigation navigationData={navigationData} />
  </HeaderWrapper>
)

export default Header
