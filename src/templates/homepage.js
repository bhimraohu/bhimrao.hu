import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
// import SliceZone from "../components/sliceZone"

export const query = graphql`
query homepageQuery($lang: String) {
  prismic {
    allHeader_topbars (lang: $lang) {
      edges {
        node {
          _meta {
            lang
            alternateLanguages {
              lang
            }
          }
          language_main
          language_second
          search_placeholder
          social_links {
            icon
            tooltip
            alt_text
            link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
    allHeader_navbars (lang: $lang) {
      edges {
        node {
          brand_logo_image
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_About_us {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_News {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Help_us {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Projects {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

class Homepage extends React.Component {

  getNavigationData = (_props) => {
    return {
      allHeader_topbars: _props.data?.prismic?.allHeader_topbars.edges[0].node,
      allHeader_navbars: _props.data?.prismic?.allHeader_navbars.edges[0].node,
      // allSubNavigations: _props.data.prismic.allSubNavigations.edges[0].node,
    }
  };

  render() {
    const navigationData = this.getNavigationData(this.props);

    return (
      <Layout navigationData={navigationData}>
        <div>
          Homepage
        </div>
        {/* <SliceZone body={this.props.data.prismic.allHomepages.edges[0].node.body} /> */}
      </Layout >
    );
  }
}

export default Homepage;