import React from "react"
import styled from "styled-components"

import { Colors, DesignSettings } from "../../utils/constants";
import RichTextCustom from "../common/richtext";

const FooterWrapper = styled.footer`
  background-color: ${Colors.main};
  color: ${Colors.dirtyWhite};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;

  .emmi-logo {
    width: 200px;
    margin-bottom: 1rem;
  }

  .eu-logo {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 310px;
    width: 400px;
    z-index: 1002;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${DesignSettings.outerWidth};
  margin: 0 auto;
  justify-content: space-between;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .columns {
    display: flex;
    flex-direction:row;
  }

  .documents-links {
    color: ${Colors.dirtyWhite};
    text-decoration: none;
    line-height: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    width: 250px;
    margin-right: 32px;
  }
  &:nth-child(2) {
    width: 125px;
    margin-right: 32px;
  }
  &:nth-child(3) {
    width: 300px;
  }
`;

const Footer = ({ data }) => {

  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="text-container">
          <div className="columns">
            <Column>
              <RichTextCustom render={data.first_section_title} />
              {
                data.first_section_links.map((link, idx) => {
                  return (
                    <a key={idx} className="documents-links" href={link.link.url} target="_blank" alt={link.label} rel="noreferrer">{link.label}</a>
                  )
                })
              }
            </Column>
            <Column>
              <RichTextCustom render={data.second_section_title} />
              <RichTextCustom render={data.second_section_field} />
            </Column>
            <Column>
              <RichTextCustom render={data.third_section_title} />
              <img className="emmi-logo" src={data.supporter_logo.url} alt="Emmi logo" />
              <RichTextCustom render={data.supporter_text} className="supporter-text" />
            </Column>
          </div>
          <RichTextCustom className="copyright-text" render={data.copyright_text} />
        </div>
      </FooterContainer>
      <img className="eu-logo" src={data.eu_logo.url} alt="EU logo" />
    </FooterWrapper>
  )
};

export default Footer;
