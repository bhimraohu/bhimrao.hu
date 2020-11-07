import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import RichTextCustom from './RichTextCustom';

const SupportersRowWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 35rem;
  background: ${Colors.imageRowBackground2};
  margin-top: 5rem;

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    padding-bottom: 5rem;

    .image-container {
      flex-direction: column !important;
    }
  }

  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${DesignSettings.innerWidth};
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .item-icon {
      max-width: 25rem;
      max-height: 17rem;
    }
  }

  .item-text {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
  }

  .title-container > h1 {
    font-size: 2.8rem;
    text-transform: uppercase;
    text-align: center;
    color: ${Colors.headerColor};
    font-weight: 500;
  }
`;

const SupportersRow = ({ title, fields }) => {

  return (
    <SupportersRowWrapper>
      <div className="title-container">
        <RichTextCustom render={title} />
      </div>
      <div className="image-container">
        {
          fields.map((field, idx) => {
            return (
              <div key={idx} className="item">
                <img
                  className="item-icon"
                  src={field.image.url}
                  alt={field.image.alt}
                />
              </div>
            )
          })
        }
      </div>
    </SupportersRowWrapper>
  );
}

export default SupportersRow;