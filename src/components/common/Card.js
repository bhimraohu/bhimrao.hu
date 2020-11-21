import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import RichTextCustom from './RichTextCustom';
import { Colors } from '../../utils/constants';
import { linkResolverBase } from '../../utils/linkResolverBase';

const CardWrapper = styled.span`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 2px 0px #424242ba;
  width: 30rem;
  height: ${props => props.height};
  margin-right: 2rem;
  
  @media screen and (max-width: 700px) {
    height: ${props => props.height ? props.height : 'initial'};
    margin-right: 0 !important;
  }

  .card-image-container {
    display: flex;
    justify-content: center;
  }

  .card-content-wrapper {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
  }

  .date {
    font-size: 1.4rem;
    color: ${Colors.textColor};
    line-height: 160%;
  }

  .card-title > h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 2rem 0;
    color: ${Colors.textColor};
    min-height: 4.5rem;
  }

  .text {
    font-size: 1.8rem;
    color: ${Colors.textColor};
    line-height: 160%;
  }

  .position > h2 {
    font-size: 1.8rem;
    font-weight: normal;
    color: ${Colors.textColor};
    line-height: 160%;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

    .button {
      color: ${Colors.red};
      font-size: 2rem;
      font-weight: bold;
      background: none;
      border: none;
      text-decoration: none;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Card = ({ item, width, height }) => {
  if (!item) {
    return null;
  }

  return (
    <CardWrapper width={width} height={height}>
      <div className="card-image-container">
        <img src={item.image.url} alt={item.image.alt} />
      </div>
      <div className="card-content-wrapper">
        <div className="content-container">
          {
            item.date
              ? <p className="date">{item.date}</p>
              : null
          }

          <div className="card-title">
            <RichTextCustom render={item.title || item.name} />
          </div>
          {
            item.short_description
              ? <div className="text">
                <RichTextCustom render={item.short_description} />
              </div>
              : null
          }
          {
            item.position
              ? <div className="position">
                <RichTextCustom render={item.position} />
              </div>
              : null
          }
        </div>
        {
          item.button_label && item._meta
            ? <div className="button-container">
              <Link
                to={linkResolverBase(item._meta)}
                className="button"
              >
                {item.button_label}&nbsp;&gt;
            </Link>
            </div>
            : null
        }
      </div>
    </CardWrapper>
  )
};

export default Card;

