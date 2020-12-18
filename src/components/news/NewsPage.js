import React from 'react';
import styled from 'styled-components';

import TitleOnly from '../common/TitleOnly';
import Card from '../common/Card';
import { DesignSettings } from "../../utils/constants";

const NewsPageWrapper = styled.section`
  margin-bottom: 10rem;
`;

const NewsRows = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  .card-container {
    margin: 3rem 0;
  }
`;

const NewsPage = ({ news, news_items }) => {
  return (
    <NewsPageWrapper>
      <TitleOnly title={news.title} />
      <NewsRows>
        {
          news_items.map((node, idx) => {
            return (
              <div key={idx} className="card-container">
                <Card item={node.node} width={'initial'} height={'100%'} />
              </div>
            )
          })
        }
      </NewsRows>
    </NewsPageWrapper>
  )
}
export default NewsPage;