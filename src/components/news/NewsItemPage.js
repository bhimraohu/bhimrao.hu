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
  flex: 0 0 30%;
  flex-wrap: wrap;
  justify-content: space-between;


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
      <img src={news_item.image.url} alt={news_item.image.alt} />
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