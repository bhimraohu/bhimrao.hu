import React from 'react';
import styled from 'styled-components';
import { Colors, DesignSettings } from '../../utils/constants';

import RichTextCustom from '../common/RichTextCustom';

const SmallDetailRowWrapper = styled.section`
  width: ${DesignSettings.textWidth};
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100% !important;

    .card-wrapper {
      display: flex;
      flex-direction: column;

      .card {
        width: 100% !important;
      }
    }
  }

  .card-wrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 45%;

      .image-container {
        min-height: 16rem;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        width: fit-content;

        > img {
          max-height: 10rem;
        }
      }

      h3 {
        font-weight: 500;
        font-size: 2.2rem;
        margin-top: 3rem;
        margin-bottom:1.5rem;
        color: ${Colors.headerColor};
      }

      p {
        font-size: 2rem;
        color: ${Colors.textColor};
        line-height: 160%;
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