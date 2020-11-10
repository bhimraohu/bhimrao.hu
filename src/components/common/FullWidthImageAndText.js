import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import Icon from '../common/IconCmp';

const FullWidthImageAndTextWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('${props => props.backgroundImage.url}');
  width: 100%;
  height: 40rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  margin-top: 10rem;
  margin-bottom: 10rem;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #00000080;
  }

  @media screen and (max-width: 950px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
    width: 100% !important;
  }

  .content-wrapper {
    z-index: 1;
  }
`;

const TextContainer = styled.div`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};
  padding: 5rem 0;
  text-transform: uppercase;

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    width: 100% !important;
  }
  
  > p {
    color: white !important;
    font-size: 2.4rem;
    line-height: 160%;
    z-index: 10;
  }
`;

const FullWidthImageAndText = ({ title, text, image }) => {
  return (
    <FullWidthImageAndTextWrapper backgroundImage={image}>
      <div className="content-wrapper">
        <TextContainer>
          <Icon icon_class={'icon-quote'} color={Colors.dirtyWhite} size={'3rem'} />
          <RichTextCustom render={text} />
        </TextContainer>
      </div>
    </FullWidthImageAndTextWrapper>
  );
}

export default FullWidthImageAndText;