import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const HeroWrapper = styled.section`
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
        ${props => props.color ? (props.color + '80') : '#00000080'} 
        calc((1140px / 1.8) + ((100vw - 1180px)/ 2)),
        rgba(0,0,0,0) 0);
  }

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 600px) {
    &::before {
      background-image: 
        linear-gradient(
          ${props => props.color ? (props.color + '80') : '#00000080'} 
          calc((1140px / 1.8) + ((100vw - 1180px)/ 2)),
          rgba(0,0,0,0) 0);
    }
  
    .hero-text-container {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }

    .hero-text-container-2ndpart {
      display: none;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 0;
    font-size: 2.2rem;
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
    text-transform: uppercase;
    line-height: 140%;
  }

  .hero-text-container-2ndpart {
    flex: 0 0 60%;
    max-width: 60%;
  }
`;

const Hero = ({ title, content, backgroundImage, color }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage} color={color}>
      <div className="hero-container">
        <div className="hero-text-container-2ndpart"></div>
        <div className="hero-text-container h1-border-bottom">
          <RichTextCustom render={title} />
          <RichTextCustom render={content} />
        </div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
