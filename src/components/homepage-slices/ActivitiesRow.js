import React from 'react';
import styled from 'styled-components';

import { Colors } from "../../utils/constants";

const ActivitiesRowWrapper = styled.section`
  margin-top: 10rem !important;
  margin-bottom: 10rem !important;
  width: 100%;
  display: flex;
  height: 25rem;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
    height: initial;
    justify-content: center;
  }

  .item {
    display: flex;
    flex: 0 0 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    min-height: 20rem;
  }
  .item:nth-of-type(odd) {
    background: ${Colors.imageRowBackground};
  }
  .item:nth-of-type(even) {
    background: ${Colors.imageRowBackground2};
  }

  .item-icon {
    width: 10rem;
    height: 10rem;
  }

  .item-text {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: ${Colors.textColor};
  }
`;

const ActivitiesRow = ({ fields }) => {

  return (
    <ActivitiesRowWrapper>
      {
        fields.map((field, idx) => {
          return (
            <div key={idx} className="item">
              <img className="item-icon" src={field.activity_icon.url} alt={field.activity_label} />
              <span className="item-text" >{field.activity_label}</span>
            </div>
          )
        })
      }
    </ActivitiesRowWrapper>
  );
}

export default ActivitiesRow;