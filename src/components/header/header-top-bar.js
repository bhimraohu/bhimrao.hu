import React from "react"
import styled from "styled-components"

import { Colors, DesignSettings } from "../../utils/constants";
import LanguageSelector from "./language-selector";
import SocialLinks from "./social-links";
import Search from "./search";

const TopBarWrapper = styled.div`
  padding: 1rem 0;
  background-color: ${Colors.main};
`;

const TopBarContainer = styled.div`
  margin: 0 auto;
  max-width: ${DesignSettings.outerWidth};
  display: flex;
  justify-content: space-between;
`;

const HeaderTopBar = ({ topbarsData }) => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <SocialLinks links={topbarsData.social_links} />
        <Search search_placeholder={topbarsData.search_placeholder} />
        {
          topbarsData.multilanguage_enabled
            ? <LanguageSelector data={topbarsData} />
            : null
        }
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default HeaderTopBar
