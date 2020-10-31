import React from 'react';
import styled from 'styled-components';
import { DesignSettings } from '../../utils/constants';

import RichTextCustom from '../common/RichTextCustom';

const SmallDetailRowWrapper = styled.section`
  width: ${DesignSettings.textWidth};
  margin: 6rem auto;
  margin-top: 4rem;

  .card-wrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 45%;

      .image-container {
        min-height: 22rem;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        width: fit-content;
      }

      h3 {
        font-weight: 500;
        font-size: 2.2rem;
        margin-top: 3rem;
        margin-bottom:1.5rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }
`;

const SmallDetailRow = ({ background_color, fields }) => {
  return (
    <SmallDetailRowWrapper background_color={background_color}>
      <div className="card-wrapper">
        {
          fields.map((item, idx) => {
            return (
              <div key={idx} className="card">
                <div className="image-container">
                  <img src={item.image.url} alt={item.image.alt} />
                </div>
                <RichTextCustom render={item.title} />
                <RichTextCustom render={item.text} />
              </div>
            )
          })
        }
      </div>
    </SmallDetailRowWrapper>
  );
}

export default SmallDetailRow;