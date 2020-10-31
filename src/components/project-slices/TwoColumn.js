import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import { DesignSettings } from "../../utils/constants";

const TwoColumnWrapper = styled.section`
  width: ${DesignSettings.outerWidth};
  margin: 3rem auto;
  margin-bottom: 5rem;
  background-color: #FCFBF9;
  padding: 5rem 0;

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