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

const Card = ({ news, width, height }) => {
  return (
    <CardWrapper width={width} height={height}>
      <img src={news.image.url} alt={news.image.alt} />
      <div className="card-content-wrapper">
        <div className="content-container">
          {
            news.date
              ? <p className="date">{news.date}</p>
              : null
          }

          <div className="card-title">
            <RichTextCustom render={news.title} />
          </div>
          <div className="text">
            <RichTextCustom render={news.short_description} />
          </div>
        </div>
        <div className="button-container">
          <Link
            to={linkResolverBase(news._meta)}
            className="button"
          >
            {news.button_label}&gt;
            </Link>
        </div>
      </div>
    </CardWrapper>
  )
};

export default Card;

