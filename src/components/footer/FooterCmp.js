import React from "react"
import styled from "styled-components"

import { Colors, DesignSettings } from "../../utils/constants";
import RichTextCustom from "../common/RichTextCustom";

const FooterWrapper = styled.footer`
  background-color: ${Colors.main};
  color: ${Colors.dirtyWhite};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30rem;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    padding-top: ${DesignSettings.mobilePaddingLeft};
    width: 100%;
    flex-direction: column;
    height: initial;
    padding-bottom: 350px;
    position: relative;

    .eu-logo {
      position: absolute !important;
    }
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 320px !important;

    .eu-logo {
      height: auto !important;
    }
  }

  .emmi-logo {
    width: 20rem;
    margin-bottom: 1.6rem;
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

  @media screen and (max-width: 950px) {
    width: 100%;
    .columns {
      flex-direction:column !important;
    }

    .copyright-text {
      margin-top: 1rem;
    }

    .documents-links { 
      margin-bottom: 2rem;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .copyright-text {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
  .columns {
    display: flex;
    flex-direction:row;
  }

  .documents-links {
    color: ${Colors.dirtyWhite};
    text-decoration: none;
    line-height: 2.4rem;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .tax-number {
    font-size: 1.8rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 950px) {
    &:nth-child(1) {
      width: initial !important;
    }
    &:nth-child(2) {
      width: initial !important;
    }
    &:nth-child(3) {
      width: initial !important;
    }
  }

  &:nth-child(1) {
    width: 25rem;
    margin-right: 4rem;
  }
  &:nth-child(2) {
    width: 12.5rem;
    margin-right: 4rem;
  }
  &:nth-child(3) {
    width: 30rem;
  }

  .supporter-text {
    font-size: 1.4rem;
  }

  > h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Footer = ({ data }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="text-container">
          <div className="columns h1-border-bottom">
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
              <div className="tax-number">
                <RichTextCustom render={data.second_section_field} />
              </div>
            </Column>

            <Column>
              <RichTextCustom render={data.third_section_title} />
              <img className="emmi-logo" src={data.supporter_logo.url} alt="Emmi logo" />
              <div className="supporter-text">
                <RichTextCustom render={data.supporter_text} />
              </div>
            </Column>
          </div>
          <div className="copyright-text">
            <RichTextCustom render={data.copyright_text} />
          </div>
        </div>
      </FooterContainer>
      <img className="eu-logo" src={data.eu_logo.url} alt="EU logo" />
    </FooterWrapper>
  )
};

export default Footer;
