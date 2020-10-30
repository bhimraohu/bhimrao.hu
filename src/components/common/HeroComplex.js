import React from 'react';
import styled from 'styled-components';

import RichTextCustom from './RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";

const HeroComplexWrapper = styled.section`
  background-image: url('${props => props.backgroundImage}');
  min-height: 40rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  
  h1 {
    color: ${Colors.main};
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 0;
    font-size: 2.2rem;
    color: ${Colors.main};
  }

  .hero-complex-container {
    margin: 0 auto;
    max-width: ${DesignSettings.innerWidth};
    height: 100%;
    z-index: 1;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }
  
  .hero-complex-text-container {
    color: ${Colors.main};
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  .hero-complex-details-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      flex: 0 0 50%;
      max-width: 50%;
    }
  
    .hero-complex-content {
      flex: 0 0 40%;
      max-width: 40%;
      color: ${Colors.main};
      font-size: 2rem;
    }
  }
`;

const HeroComplex = ({ background_image, description, foreground_image, subtitle, title }) => {
  return (
    <HeroComplexWrapper backgroundImage={background_image}>
      <div className="hero-complex-container">
        <div className="hero-complex-text-container h1-border-bottom">
          <RichTextCustom render={title} />
          {
            subtitle
              ? <RichTextCustom render={subtitle} />
              : null
          }
        </div>
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
