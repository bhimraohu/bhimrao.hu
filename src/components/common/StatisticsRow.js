import React from 'react';
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";

const StatisticsRowWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${Colors.main};
  color: ${Colors.dirtyWhite};
  height: 25rem;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1300px) {
    padding: 5rem 0;
    padding-left: 2rem;
    padding-right: 2rem;
    height: initial !important;

    .stat-container {
      height: initial !important;
      justify-content: center;
      align-items: center;
      width: 100% !important;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
      }
    }

    .text-container {
      width: 100% !important;

      .text-content {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 950px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }

  .stat-container {
    width: ${DesignSettings.outerWidth};
    margin: 0 auto;
    display: flex;
    height: 10rem;
    flex-wrap: wrap;
    align-items: flex-start;

    .item {
      display: flex;
      flex: 0 0 ${props => props.fieldLength};
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .item-stat_number {
      color: ${Colors.red};
      font-weight: bolder;
      font-size: 3rem;
    }

    .item-stat_text {
      text-align: center;
      font-weight: bold;
      font-size: 2.4rem;
    }
  }

  .text-container {
    width: ${DesignSettings.outerWidth};
    display: flex;
    justify-content: flex-end;
    align-self: center;

    .text-content {
      font-size: 1.8rem;
    }
  }
`;

const StatisticsRow = ({ explanation, fields }) => {
  const fieldLength = 100 / fields?.length + '%';

  return (
    <StatisticsRowWrapper fieldLength={fieldLength}>
      <div className="stat-container">
        {
          fields.map((field, idx) => {
            return (
              <div key={idx} className="item">
                <span className="item-stat_number">{field.stat_number}</span>
                <span className="item-stat_text" >{field.stat_text}</span>
              </div>
            )
          })
        }
      </div>
      {
        explanation
          ? <div className="text-container">
            <span className="text-content">{explanation}</span>
          </div>
          : null
      }
    </StatisticsRowWrapper>
  );
}

export default StatisticsRow;