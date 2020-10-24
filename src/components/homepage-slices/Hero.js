import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/richtext';
import { DesignSettings } from "../../utils/constants";

const HeroWrapper = styled.section`
  background-image: url('${props => props.backgroundImage}');
  min-height: 60rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;

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
        rgba(0,0,0,0) 
        calc((1140px / 1.8) + ((100vw - 1180px)/ 2)),
        rgba(0,0,0,0.5) 0);
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

const Hero = ({ content, title, subtitle, backgroundImage }) => {

  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div className="hero-container">
        <div className="hero-text-container">
          <RichTextCustom render={title} />
          <RichTextCustom render={subtitle} />
          <p className="hero-content">{content}</p>
        </div>
        <div className="hero-text-container-2ndpart"></div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;