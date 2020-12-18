import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import Hero from './Hero';

const HeroComplexWrapper = styled.section`
  min-height: 40rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10rem;

  @media screen and (max-width: 1300px) {
    .hero-complex-details-container {
      padding-left: ${DesignSettings.mobilePaddingLeft};
      padding-right: ${DesignSettings.mobilePaddingRight};
    }
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 5rem !important;

    .hero-complex-details-container {
      margin-top: 3rem;
      flex-direction: column !important;

      img {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
  
      .hero-complex-content {
        margin-top: 3rem;
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
  }

  .hero-complex-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

    > section {
      margin-bottom: 3rem;
    }
  }
  
  .hero-complex-text-container {
    color: ${Colors.main};
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }

  .hero-complex-details-container {
    max-width: ${DesignSettings.innerWidth};
    margin: 0 auto;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      flex: 0 0 50%;
      max-width: 50%;
    }
  
    .hero-complex-content {
      display: flex;
      align-items: flex-end;
      flex: 0 0 45%;
      max-width: 45%;
      color: ${Colors.main};
      font-size: 2rem;
      line-height: 160%;
    }
  }
`;

const HeroComplex = ({ title, main_description, background_image, hero_color, description, foreground_image }) => {
  return (
    <HeroComplexWrapper backgroundImage={background_image}>
      <div className="hero-complex-container">
        <Hero title={title} content={main_description} backgroundImage={background_image} color={hero_color} />
        <div className="hero-complex-details-container">
          <img src={foreground_image} alt="title" />
          <div className="hero-complex-content">
            <RichTextCustom render={description} />
          </div>
        </div>
      </div>
    </HeroComplexWrapper>
  );
}

export default HeroComplex;
