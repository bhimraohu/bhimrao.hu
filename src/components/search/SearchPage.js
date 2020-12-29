import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { Link } from "gatsby"

import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import { prismicRepo } from '../../../prismic-config'
import { linkResolverBase } from '../../utils/linkResolverBase';
import RichTextCustom from '../common/RichTextCustom';
import TitleOnly from '../common/TitleOnly';
import { Colors, DesignSettings } from "../../utils/constants";
import Search from '../header/SearchCmp';

const client = new ApolloClient({
  link: PrismicLink({
    uri: `https://${prismicRepo}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
});

const SearchWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.textWidth};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const SearchResults = styled.div`
  margin: 5rem 0 10rem 0;
  min-height: 30rem;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }
  
  @media screen and (max-width: 950px) {
    width: 100%;
    min-height: 20rem !important;
  }

  .search-results {
    .category {
      h1 {
        font-size: 2.5rem;
        color: ${Colors.main};
        text-transform: capitalize;
      }
    }
  }

  .link-item {
    h1 {
      margin: 2rem 0 2rem 2rem;
      font-size: 2rem;
      color: ${Colors.textColor};
      text-transform: capitalize;
    }
  }
`;

const SearchCmpContainer = styled.div`
  display: flex;
  justify-content: center;

  .border {
    border: 1px solid ${Colors.main};

    > div {
      margin-right: 0;
      padding: 0.5rem;
      width: 40rem;

      @media screen and (max-width: 950px) {
        form {
          width: 28rem !important;

          input {
            width: 30rem !important;
          }
        }
      }

      > form {
        width: 38rem;

        > input {
          width: 40rem;
        }
      }
    }
  }
`;

const SearchPage = ({ node, navigationData }) => {

  const mergeResults = (results) => {
    var _navData = navigationData;

    let searchResult = results._allDocuments.edges.map(function (result, idx, arr) {
      switch (result.node._meta.type) {
        case 'news_item':
          const newsItem = _navData.allNews_items.edges.map(function (item) {
            if (item.node._meta.uid === result.node._meta.uid) {
              return {
                lang: item.node._meta.lang,
                type: item.node._meta.type,
                uid: item.node._meta.uid,
                title: item.node.title
              }
            }
            return null;
          }).filter((item) => item);

          return newsItem ? newsItem[0] : null;
        case 'about_us':
          if (_navData.allAbout_uss.edges.length) {
            const title = _navData.allHeader_navbars.navigation_links.find((link) => {
              return link.link._meta.type === result.node._meta.type;
            });

            return {
              lang: result.node._meta.lang,
              type: result.node._meta.type,
              uid: result.node._meta.uid,
              title: title.label
            }
          }
          return null;
        case 'project':
          const project = _navData.allProjects.edges.map(function (item) {

            const projectGroup = _navData.allProjectss.body.find((projects) => {
              return projects.fields.find((field) => {
                return field.link._meta.uid === result.node._meta.uid;
              });
            });

            const proj = projectGroup.fields.find((field) => {
              return field.link._meta.uid === result.node._meta.uid
                ? field.title ? field.title : field.link_label
                : null;
            });

            if (item.node._meta.uid === result.node._meta.uid) {
              return {
                lang: result.node._meta.lang,
                type: result.node._meta.type,
                uid: result.node._meta.uid,
                title: proj.title ? proj.title : proj.link_label,
              }
            }
            return null;
          }).filter((item) => item);

          return project ? project[0] : null;
        case 'study_hall':
          const studyHall = _navData.allStudy_halls.edges.map(function (item) {

            const hall = _navData.allStudy_halls.edges.find((study_hall) => {
              return study_hall.node._meta.uid === result.node._meta.uid;
            });

            if (item.node._meta.uid === result.node._meta.uid) {
              return {
                lang: result.node._meta.lang,
                type: result.node._meta.type,
                uid: result.node._meta.uid,
                title: hall.node.title,
              }
            }
            return null;
          }).filter((item) => item);

          return studyHall ? studyHall[0] : null;
        default:
          return null;
      }
    })
    searchResult = searchResult.filter((item) => item)

    return searchResult;
  }

  const runSearch = (searchterm) => {
    const lang = window?.location.pathname.indexOf('/en-us') === 0 ? 'en-us' : 'hu';

    client.query({
      query: getSearchQuery(),
      variables: {
        searchterm,
        lang,
      }
    }).then(response => {
      let result = mergeResults(response.data);
      result = result.sort((a, b) => {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return 0;
      });
      setSearchData(result);
    }).catch(error => {
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
    if (searchValue !== query.search) {
      setSearchValue(query.search);
      handleSubmit(query.search);
    }
  }

  const categories = node.categories.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
  });

  return (
    <SearchWrapper>
      <TitleOnly title={node.title} />
      <SearchCmpContainer>
        <div className="border">
          <Search search_placeholder={node.search_placeholder} value={searchValue} />
        </div>
      </SearchCmpContainer>
      <SearchResults>
        {
          searchData
            ? getSearch(searchData, categories, node)
            : null
        }
      </SearchResults>
    </SearchWrapper>
  )
}

const getSearch = (searchData, categories, node) => {
  if (!searchData || !searchData.length) {
    return (
      <div className="link-item">
        <RichTextCustom render={node.no_result} />
      </div>
    )
  }

  return (
    <>
      {
        categories.map((element, idx) => {
          const exist = searchData.find(data => data.type === element.type);

          if (exist) {
            const dat = searchData.filter((data) => data.type === exist.type);

            return (
              <div className="search-results" key={idx}>
                <div className="category h1-border-bottom common-header">
                  <RichTextCustom render={element.category} />
                </div>
                <div>
                  {
                    dat.map((data, idx) => getLink(data, idx))
                  }
                </div>
              </div>
            )
          }
          return null;
        })
      }
    </>
  )
}

const getLink = (data, idx) => {
  return (
    <Link
      key={idx}
      to={linkResolverBase(data)}
      className="link-item"
    >
      {
        typeof data.title === 'string'
          ? <h1>{data.title}</h1>
          : <RichTextCustom render={data.title} />
      }
    </Link>
  );
}

const getSearchQuery = () => gql`
query SearchQuery($searchterm: String, $lang: String) {
  _allDocuments(fulltext: $searchterm, lang: $lang) {
    edges {
      node {
        _meta {
          lang
          uid
          type
        }
      }
    }
  }
}
`;

export default SearchPage;