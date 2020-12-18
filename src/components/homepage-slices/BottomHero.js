import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from '../../utils/constants';
import Icon from '../common/IconCmp';

const BottomHeroWrapper = styled.section`
  background-image: url('${props => props.backgroundImage}');
  min-height: 40rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: 
      linear-gradient(
        -120deg,
        rgba(0,0,0,.5) 
        calc((1140px / 1.8) + ((100vw - 1180px)/ 2)),
        rgba(0,0,0,0) 0);
  }

  @media screen and (max-width: 600px) {
    &:before {
      background: rgba(0,0,0,.5) !important;
    }

    .hero-container {
      margin-bottom: 0 !important;
      padding: 5rem;
    }

    .hero-text-container-2ndpart {
      display: none;
    }

    .hero-text-container {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
  }

  h1 {
    font-size: 7rem;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-size: 4rem;
  }

  .hero-container {
    margin: 0 auto;
    max-width: ${DesignSettings.outerWidth};
    height: 100%;
    z-index: 1;
    margin-bottom: 4rem;
    display: flex;
  }
  
  .hero-text-container {
    flex: 0 0 40%;
    max-width: 40%;
    color: white;
    font-size: 2.2rem;
    font-style: italic;
    text-transform: uppercase;
    line-height: 160%;
  }
  
  .hero-text-container-2ndpart {
    flex: 0 0 60%;
    max-width: 60%;
  }
  
  .hero-content {
    color: white;
    font-size: 2rem;
  }
`;

const BottomHero = ({ icon, content, backgroundImage }) => {
  return (
    <BottomHeroWrapper backgroundImage={backgroundImage} icon={icon}>
      <div className="hero-container">
        <div className="hero-text-container-2ndpart"></div>
        <div className="hero-text-container">
          <Icon icon_class={'icon-quote'} color={Colors.dirtyWhite} size={'3rem'} />
          <RichTextCustom render={content} />
        </div>
      </div>
    </BottomHeroWrapper>
  );
}

export default BottomHero;
