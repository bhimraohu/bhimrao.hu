import React from "react"
import styled from "styled-components"

import Icon from "../common/icon";

const SocialLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  align-items: center;
  padding: 0 10px;
  
  li {
    padding-left: 4px;
    padding-right: 4px;
    margin-bottom: 0;
  }
`;

const SocialLinks = ({ links }) => {
  return (
    <SocialLinksWrapper>
      {
        links.map((link, idx) => (
          <li key={idx}>
            <a href={link.link.url} title={link.tooltip} alt={link.alt_text} target="_blank" rel="noreferrer">
              <Icon icon_class={link.icon_class} />
            </a>
          </li>
        ))
      }
    </SocialLinksWrapper>
  )
};

export default SocialLinks;
