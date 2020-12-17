import React from 'react';
import styled from 'styled-components';

import RichTextCustom from '../common/RichTextCustom';
import Card from '../common/Card';
import { DesignSettings } from "../../utils/constants";

const TopNewsWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  margin-top: 5rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 1000px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
    width: 100%;

    .news-row {
      justify-content: center !important;

      > span {
        margin-bottom: 3rem;
      }
    } 
  }

  .news-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 0 0 30%;
    margin-top: 3rem;
  }

  .section-title > h1 {
    font-size: 2.8rem;
    font-weight: bold;
  }
`;

const TopNews = ({ title, news }) => {
  return (
    <TopNewsWrapper>
      <div className="section-title h1-border-bottom common-header">
        <RichTextCustom render={title} />
      </div>
      <div className="news-row">
        {
          news?.map((newsItem, idx) => {
            return (
              <Card key={idx} item={newsItem.node} width={'30%'} />
            )
          })
        }
      </div>
    </TopNewsWrapper>
  );
}

export default TopNews;