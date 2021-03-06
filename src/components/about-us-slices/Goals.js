import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const GoalsWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100%;

    .odd {
      flex-direction: column !important;
      height: initial !important;

      .content-container {
        margin-right: 0 !important;
      }
    }
    
    .even {
      flex-direction: column-reverse !important;
      height: initial !important;

      .content-container {
        margin-left: 0 !important;
      }
    }
    
    .goal-image {
      align-self: flex-start !important;
      width: inherit !important;
      height: inherit !important;
    }
  }  
  
  @media screen and (max-width: 600px) {
    .goal-container {
      .goal-image {
        margin-top: 3rem !important;
      }
    }
  }

  > .h1-border-bottom > h1 {
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  > .h1-border-bottom > p {
    font-size: 2rem;
  }

  .goals-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 4rem 0;

    .goal-container {
      font-size: 2rem;
      margin: 4rem 0;

      .odd,
      .even {
        display: flex;
        flex-direction: row;
        /* height: 36rem; */
      }

      .goal-icon {
        width: 10rem;
        height: 8rem;
        margin-bottom: 2rem;
      }

      .goal-image {
        margin-top: 10rem;
        width: 41rem;
        height: 26rem;
        align-self: flex-start;
      }

      .even .content-container {
        margin-left: 6rem;
      }

      .odd .content-container {
        margin-right: 6rem;
      }

      .content-container > p {
        margin-bottom: 2rem;
      }
    }
  }
`;

const Goals = ({ title, fields }) => {

  return (
    <GoalsWrapper>
      <div className="h1-border-bottom common-header">
        <RichTextCustom render={title} />
        <div className="goals-wrapper common-text">
          {
            fields.map((field, idx) =>
              <div key={idx} className="goal-container">
                {
                  (idx + 1) % 2 === 1
                    ? getOddStyle(field)
                    : getEvenStyle(field)
                }
              </div>
            )
          }
        </div>
      </div>
    </GoalsWrapper>
  );
}

const getOddStyle = (field) => (
  <div className="odd">
    <div className="content-container">
      <img className="goal-icon" src={field.icon.url} alt={field.icon.alt} />
      <RichTextCustom render={field.description} />
    </div>
    <img className="goal-image" src={field.image.url} alt={field.image.alt} />
  </div>
)

const getEvenStyle = (field) => (
  <div className="even">
    <img className="goal-image" src={field.image.url} alt={field.image.alt} />
    <div className="content-container">
      <img className="goal-icon" src={field.icon.url} alt={field.icon.alt} />
      <RichTextCustom render={field.description} />
    </div>
  </div>
)

export default Goals;