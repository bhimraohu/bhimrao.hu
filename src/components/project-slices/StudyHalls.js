import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import { Colors } from "../../utils/constants";
import { linkResolverBase } from '../../utils/linkResolverBase';
import Icon from '../common/IconCmp';

const StudyHallsWrapper = styled.section`
  margin: 5rem auto;
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
      &:hover .icon-home::before,
      &:hover .item-link .item-stat_text {
        color: ${Colors.red};
        cursor: pointer;
      }

      .item-link {
        display: flex;
        flex-direction: column;
        text-align: center;
        text-decoration: none;

        .item-stat_text {
          font-weight: bold;
          font-size: 2.4rem;
          color: ${Colors.dirtyWhite};
        }
      }
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
                <Link
                  to={linkResolverBase(field.link._meta)}
                  className="item-link"
                >
                  <Icon icon_class={'icon-home'} color={Colors.dirtyWhite} size={'7rem'} />
                  <span className="item-stat_text">{field.label}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
    </StudyHallsWrapper>
  );
}

export default StudyHalls;