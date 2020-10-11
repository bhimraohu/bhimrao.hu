import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
query homepageQuery($lang: String) {
  prismic {
    allHomepages (lang: $lang) {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              primary {
                hero_title
                hero_content
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                call_to_action_title
                content
                featured_image
              }
            }
            ... on PRISMIC_HomepageBodyPrice_list {
              type
              primary {
                title
              }
              fields {
                price_list_title
                price_list_description
                price_per_month
                price_type
              }
            }
          }
        }
      }
    }
    allNavigations (lang: $lang) {
      edges {
        node {
          branding
          _meta {
            lang
            type
            alternateLanguages {
              lang
            }
          }
          navigation_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                  type
                  lang
                }
              }
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                  type
                  lang
                }
              }
            }
          }
        }
      }
    }
    allSubNavigations (lang: $lang) {
      edges {
        node {
          parent
          sub_navigation {
            label
            parent
            link {
              ... on PRISMIC_Projects {
                _meta {
                  uid
                  type
                  lang
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

  navigationData = {
    allNavigations: this.props.data.prismic.allNavigations,
    allSubNavigations: this.props.data.prismic.allSubNavigations,
  };

  render() {
    return (
      <Layout navigationData={this.navigationData}>
        <SliceZone body={this.props.data.prismic.allHomepages.edges[0].node.body} />
      </Layout >
    );
  }
}

export default Homepage;