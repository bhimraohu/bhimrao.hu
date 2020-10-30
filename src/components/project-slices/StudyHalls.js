import React from 'react';
import styled from 'styled-components';

import { Colors } from "../../utils/constants";
import Icon from '../common/Icon';

const StudyHallsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${Colors.main};
  color: ${Colors.dirtyWhite};
  height: 25rem;
  justify-content: space-evenly;

  .halls-container {
    width: 100%;
    display: flex;
    height: 10rem;
    justify-content: space-evenly;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
      &:hover,
      &:hover .icon-home::before {
        color: ${Colors.red};
        cursor: pointer;
      }
    }

    .item-stat_text {
      text-align: center;
      font-weight: bold;
      font-size: 2.4rem;
    }
  }
`;

const StudyHalls = ({ fields }) => {
  return (
    <StudyHallsWrapper>
      <div className="halls-container">
        {
          fields.map((field, idx) => {
            return (
              <div key={idx} className="item">
                <Icon icon_class={'icon-home'} color={Colors.dirtyWhite} size={'7rem'} />
                <span className="item-stat_text">{field.label}</span>
                {/* <Link 
                  to={linkResolverBase(field.link._meta)}
                  className="item-stat_text"
                >
                  {field.label}
                </Link> */}
              </div>
            )
          })
        }
      </div>
    </StudyHallsWrapper>
  );
}

export default StudyHalls;