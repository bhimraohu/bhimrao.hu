import React from 'react';
import styled from 'styled-components';

import TitleOnly from '../common/TitleOnly';
import Card from '../common/Card';
import { DesignSettings } from "../../utils/constants";

const NewsRows = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  display: flex;
  flex-direction: row;
  flex: 0 0 30%;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-container {
    width: 30%;
    margin: 3rem 0;
  }
`;

const NewsPage = ({ news, news_items, totalCount }) => {

  const placeholders = 3 - (totalCount % 3);
  // add extra
  for (let i = 0; i < placeholders; i++) {
    news_items.push({
      node: {
        placeholder: true,
      }
    });
  }

  return (
    <div>
      <TitleOnly
        title={news.title}
      />
      <NewsRows>
        {
          news_items.map((node, idx) => {
            console.log(node.node)

            return (
              node.node.placeholder
                ? <div className="card-container"></div>
                : <div className="card-container">
                  <Card key={idx} news={node.node} width={'initial'} height={'100%'} />
                </div>
            )
          })
        }
      </NewsRows>
    </div>
  )
}
export default NewsPage;