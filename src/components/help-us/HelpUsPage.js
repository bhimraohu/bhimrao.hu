import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import TextWithTitle from '../common/TextWithTitle'

const HelpUsPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .helpus-wrapper {
    width: 100%;

      &:nth-child(1) {
        background-color: #F7F6F0;
      }

    .helpus-container {
      margin: 10rem auto;
      width: ${DesignSettings.innerWidth};
      display: flex;
      flex-direction: row;

      h2 {
        font-size: 5rem;
        color: ${Colors.red};
        text-transform: uppercase;
      }

      .texts {
        width: ${DesignSettings.innerWidth};

        > section {
          width: 60rem;
          margin-left: 0;

        }

        .key-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: ${Colors.red};
        }
      }

      .image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
          width: 18.5rem;
          height: 16rem;
          max-width: initial;
        }
      }
    }
  }
`;

const HelpUsPage = ({ help_fields }) => {

  return (
    <HelpUsPageWrapper>
      {
        help_fields.map((field, idx) => {
          return (
            <div className="helpus-wrapper">
              <div key={idx} className="helpus-container">
                <div className="texts">
                  <TextWithTitle title={field.title} text={field.description} />
                  <p className="key-number">{field.key_number}</p>
                </div>
                <div className="image">
                  <img src={field.image.url} alt={field.image.alt} />
                </div>
              </div>
            </div>
          )
        })
      }
    </HelpUsPageWrapper>
  )
}

export default HelpUsPage;