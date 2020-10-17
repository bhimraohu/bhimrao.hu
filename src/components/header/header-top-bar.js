import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";
import LanguageSelector from "./language-selector";
import SocialLinks from "./social-links";
import Search from "./search";

const TopBarWrapper = styled.div`
  padding: 1rem 0;
  background-color: ${Colors.main};
  
  > div {
    margin: 0 auto;
    max-width: 960px;
    display: flex;
    justify-content: flex-end;
  }
`;

const TopBarContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
`;

const HeaderTopBar = ({ topbarsData }) => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <Search search_placeholder={topbarsData.search_placeholder} />
        <SocialLinks links={topbarsData.social_links} />
        <LanguageSelector data={topbarsData} />
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default HeaderTopBar
