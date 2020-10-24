import React from 'react';
import styled from 'styled-components';

import { Colors } from "../../utils/constants";
import RichTextCustom from '../common/richtext';

const SupportersRowWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 45rem;
  background: ${Colors.imageRowBackground2};
  margin-top: 5rem;

  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    text-align: center;
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