import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

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
        -106deg,
        rgba(0,0,0,.5) 
        calc((1140px / 1.8) + ((100vw - 1180px)/ 2)),
        rgba(0,0,0,0) 0);
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
    max-width: ${DesignSettings.innerWidth};
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

    &::before{
      content: "";
      background: transparent url(${props => props.icon.url}) no-repeat 0 0;
      width: 6rem;
      height: 6rem;
      display: inline-block;
    }
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
        <blockquote className="hero-text-container">
          <RichTextCustom render={content} />
        </blockquote>
      </div>
    </BottomHeroWrapper>
  );
}

export default BottomHero;
