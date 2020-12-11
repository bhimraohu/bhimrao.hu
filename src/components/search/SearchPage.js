import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

import TitleOnly from '../common/TitleOnly';
import { DesignSettings } from "../../utils/constants";

import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import { prismicRepo } from '../../../prismic-config'

const client = new ApolloClient({
  link: PrismicLink({
    uri: `https://${prismicRepo}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
});

const getSearchQuery = () => gql`
query SearchQuery($searchterm: String, $lang: String) {
  _allDocuments(fulltext: $searchterm, lang: $lang) {
    edges {
      node {
        _meta {
          uid
          type
        }
        ... on PRISMIC_Project {
          body {
            ... on PRISMIC_ProjectBodyHero_image {
              primary {
                hero_title
              }
            }
          }
          _meta {
            uid
            type
          }
        }
        ... on PRISMIC_Study_hall {
          title
          _meta {
            uid
            type
          }
        }
        ... on PRISMIC_News_item {
          title
          _meta {
            uid
            type
          }
        }
        ... on PRISMIC_About_us {
          body {
            ... on PRISMIC_About_usBodyHero_image {
              primary {
                hero_title
              }
            }
          }
          _meta {
            uid
            type
          }
        }
      }
    }
  }
}
`;

const SearchWrapper = styled.section`
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

const SearchPage = ({ node }) => {

  const runSearch = (searchterm) => {
    const lang = window?.location.pathname.indexOf('/en-us') === 0 ? 'en-us' : 'hu';

    client.query({
      query: getSearchQuery(),
      variables: {
        searchterm,
        lang,
      }
    }).then(response => {
      console.log('query data');
      console.log(response);
      setSearchData(response);
    }).catch(error => {
      console.log('query error');
      console.error(error);
      setSearchData(null);
    });
  }

  const handleSubmit = (search) => {
    runSearch(search)
  }

  const [searchValue, setSearchValue] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const location = useLocation();
  const query = location.search ? queryString.parse(location.search) : null;
  if (query) {
    console.log(query.search);
    if (searchValue !== query.search) {
      setSearchValue(query.search);
      handleSubmit(query.search);
    }
  }

  return (
    <SearchWrapper>
      <TitleOnly title={node.title} />
      <div>
        {
          searchData
            ? searchData.data._allDocuments.edges.map((edge, idx) => {
              return (
                <div key={idx}>
                  {edge.node._meta.type} {edge.node._meta.uid}
                </div>
              )
            })
            : null
        }
      </div>
    </SearchWrapper>
  )
}
export default SearchPage;