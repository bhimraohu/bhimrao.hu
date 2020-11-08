import React from 'react';
import styled from 'styled-components';

import TitleOnly from '../common/TitleOnly';
import { Colors, DesignSettings } from "../../utils/constants";
import TextOnly from '../common/TextOnly';

const NewsItemWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    .main-image {
      width: 100%;
    }

    .date {
      width: 100% !important;
    }
  }

  .main-image {
    width: initial;
  }

  .date {
    margin: 0 auto;
    font-size: 1.4rem;
    color: ${Colors.textColor};
    width: ${DesignSettings.textWidth};
  }
`;

const NewsItemPage = ({ news_item }) => {

  return (
    <NewsItemWrapper>
      <img className="main-image" src={news_item.image.url} alt={news_item.image.alt} />
      <TitleOnly
        title={news_item.title}
      />
      {
        news_item.date
          ? <p className="date">{news_item.date}</p>
          : null
      }
      <TextOnly text={news_item.content} />
    </NewsItemWrapper>
  )
}
export default NewsItemPage;