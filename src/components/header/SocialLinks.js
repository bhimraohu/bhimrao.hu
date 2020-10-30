import React from "react"
import styled from "styled-components"

import Icon from "../common/Icon";

const SocialLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  align-items: center;
  padding: 0 1rem;

  li {
    margin-bottom: 0;
    width: 3rem;
    height: 1.5rem;
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
