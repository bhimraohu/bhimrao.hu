import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/LayoutCmp"
import SliceZone from "../components/about-us-slices/SliceZone"
import SEO from "../components/seo"

class AboutUs extends React.Component {

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
    const { primary } = this.props.data.prismic.allAbout_uss.edges[0].node.body.find((item) => item.type === 'seo1');

    return (
      <Layout navigationData={navigationData}>
        <SEO
          title={primary.seo_title}
          description={primary.seo_description}
        />
        <SliceZone body={this.props.data.prismic.allAbout_uss.edges[0].node.body} />
      </Layout >
    )
  }
}

export default AboutUs;

export const query = graphql`
query aboutusQuery($lang: String) {
  prismic {
    allAbout_uss(lang: $lang) {
      edges {
        node {
          body {
            ... on PRISMIC_About_usBodySeo1 {
              type
              primary {
                seo_title
                seo_description
              }
            }
            ... on PRISMIC_About_usBodyHero_image {
              type
              primary {
                hero_title
                hero_content
                hero_image
                hero_color
              }
            }
            ... on PRISMIC_About_usBodyActivities {
              type
              primary {
                content
                link_label
                link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                corner_image_position
                corner_image
              }
            }
            ... on PRISMIC_About_usBodyStatistics_row {
              type
              primary {
                explanation
              }
              fields {
                stat_number
                stat_text
              }
            }
            ... on PRISMIC_About_usBodyGoals {
              type
              primary {
                title
              }
              fields {
                description
                icon
                image
              }
            }
            ... on PRISMIC_About_usBodyText_with_title {
              type
              primary {
                text
                text_subtitle
                text_title
              }
            }
            ... on PRISMIC_About_usBodyText_only {
              type
              primary {
                text
              }
            }
            ... on PRISMIC_About_usBodyHighlighted_text {
              type
              primary {
                background_color
                highlighted_text
              }
            }
            ... on PRISMIC_About_usBodyFull_width_image_and_text {
              type
              primary {
                title
                text
                image
              }
            }
            ... on PRISMIC_About_usBodyImage_row {
              type
              primary {
                image_center
                image_left
                image_right
              }
            }
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