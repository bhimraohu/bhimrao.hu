import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import RichTextCustom from './RichTextCustom';

const SupportersRowWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 35rem;
  background: ${Colors.imageRowBackground2};
  margin-top: 5rem;
  padding: 4rem;

  @media screen and (max-width: 1300px) {
    /* padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight}; */
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    padding-bottom: 5rem;

    .image-container {
      width: initial !important;
    }
  }

  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* width: ${DesignSettings.innerWidth}; */
    flex-wrap: wrap;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    
    .item-icon {
      max-width: 20rem;
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