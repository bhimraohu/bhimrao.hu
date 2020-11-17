import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";

const TwoColumnWrapper = styled.section`
  width: ${DesignSettings.outerWidth};
  margin: 3rem auto;
  margin-bottom: 5rem;
  background-color: #FCFBF9;
  color: ${Colors.main};
  padding: 5rem 0;

  @media screen and (max-width: 1300px) {
    width: 100% !important;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 950px) {
    .content-wrapper {
      width: 100% !important;
      flex-direction: column !important;

      .column {
        width: 100% !important;

        &:nth-of-type(1) {
          margin-bottom: 3rem;
        }
      }
    }
  }

  .content-wrapper {
    width: ${DesignSettings.textWidth};
    margin: 0 auto;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .column {
      width: 45%;

      h1 {
        font-size: 2.4rem;
        text-decoration: underline;
        font-weight: 500;
      }
    }
  }
`;

const TwoColumn = ({ fields }) => {
  return (
    <TwoColumnWrapper>
      <div className="content-wrapper">
        {
          fields.map((field, idx) => {
            return (
              <div key={idx} className="column">
                <RichTextCustom render={field.title} />
                <RichTextCustom render={field.details} />
              </div>
            )
          })
        }
      </div>
    </TwoColumnWrapper>
  );
}

export default TwoColumn;