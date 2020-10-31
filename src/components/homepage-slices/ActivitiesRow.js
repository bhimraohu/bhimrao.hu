import React from 'react';
import styled from 'styled-components';

import { Colors } from "../../utils/constants";

const ActivitiesRowWrapper = styled.section`
  width: 100%;
  display: flex;
  height: 25rem;

  .item {
    display: flex;
    flex: 0 0 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item:nth-of-type(odd) {
    background: ${Colors.imageRowBackground};
  }
  .item:nth-of-type(even) {
    background: ${Colors.imageRowBackground2};
  }


  .item:nth-of-type(1) .item-icon {
    width: 7.3rem;
    height: 7.3rem;
  }
  .item:nth-of-type(2) .item-icon {
    width: 9.2rem;
    height: 7.3rem;
  }
  .item:nth-of-type(3) .item-icon {
    width: 8.6rem;
    height: 7.3rem;
  }
  .item:nth-of-type(4) .item-icon {
    width: 8.8rem;
    height: 7.3rem;
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