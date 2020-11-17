import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/LayoutCmp"
import SliceZone from "../components/homepage-slices/SliceZone"

class Homepage extends React.Component {

  getNavigationData = (_props) => {
    return {
      allHeader_topbars: _props.data?.prismic?.allHeader_topbars.edges[0].node,
      allHeader_navbars: _props.data?.prismic?.allHeader_navbars.edges[0].node,
      allHeader_navigation_submenus: _props.data?.prismic?.allHeader_navigation_submenus,
      allFooters: _props.data?.prismic?.allFooters.edges[0].node,
    }
  };

  render() {
    const navigationData = this.getNavigationData(this.props);

    return (
      <Layout navigationData={navigationData}>
        <SliceZone
          body={this.props.data.prismic.allHomepages.edges[0].node.body}
          news={this.props.data.prismic.allNews_items.edges}
        />
      </Layout >
    );
  }
}

export default Homepage;

export const query = graphql`
query homepageQuery($lang: String) {
  prismic {
    allHomepages (lang: $lang) {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero_image {
              type
              primary {
                hero_title
                hero_subtitle
                hero_content
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyIntro_text {
              type
              primary {
                intro_title
                intro_text
              }
            }
            ... on PRISMIC_HomepageBodyActivities_row {
              type
              fields {
                activity_icon
                activity_label
              }
            }
            ... on PRISMIC_HomepageBodyTop_news {
              type
              primary {
                title
              }
            }
            ... on PRISMIC_HomepageBodySupporters {
              type
              primary {
                title
              }
              fields {
                image
              }
            }
            ... on PRISMIC_HomepageBodyBottom_hero {
              type
              primary {
                hero_bottom_icon
                hero_bottom_content
                hero_bottom_image
              }
            }
          }
        }
      }
    }

    allNews_items(sortBy: date_DESC, first: 3) {
      edges {
        node {
          button_label
          short_description
          content
          date
          title
          image
          _meta {
            uid
            type
            lang
          }
        }
      }
    }

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
          multilanguage_enabled
          search_placeholder
          social_links {
            icon_class
            tooltip
            alt_text  
            link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
          address
          address_label
          address_maps_link
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
            submenu
            is_cta
            link {
              ... on PRISMIC_About_us {
                _meta {
                  uid
                  type
                  lang
                }
              }
              ... on PRISMIC_News {
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
              ... on PRISMIC_Help_us {
                _meta {
                  uid
                  type
                  lang
                }
              }
              ... on PRISMIC_Projects {
                _meta {
                  uid
                  type
                  lang
                }
              }
              ... on PRISMIC_Team {
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

    allHeader_navigation_submenus(lang: $lang) {
      edges {
        node {
          parent
          sub_navigation_links {
            label
            link {
              ... on PRISMIC_Project {
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

    allFooters (lang: $lang) {
      edges {
        node {
          first_section_title
          first_section_links {
            label
            link {
              ... on PRISMIC__FileLink {
                url
              }
            }
          }
          second_section_title
          second_section_field
          third_section_title
          supporter_logo
          supporter_text
          copyright_text
          eu_logo
        }
      }
    }
  }
}
`;