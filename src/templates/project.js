import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/LayoutCmp"
import SliceZone from "../components/project-slices/SliceZone"

class Project extends React.Component {

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
          body={this.props.data.prismic.allProjects.edges[0].node.body}
          closed={this.props.data.prismic.allProjects.edges[0].node.closed}
        />
      </Layout >
    );
  }
}

export default Project;

export const query = graphql`
query projectQuery($lang: String, $uid: String) {
  prismic {
    allProjects(lang: $lang, uid: $uid) {
      edges {
        node {
          closed
          _meta {
            uid
            type
            lang
          }
          body {
            ... on PRISMIC_ProjectBodyHero_image {
              type
              primary {
                hero_color
                hero_description
                hero_image
                hero_title
              }
            }
            ... on PRISMIC_ProjectBodyText_with_title {
              type
              primary {
                text
                text_subtitle
                text_title
              }
            }
            ... on PRISMIC_ProjectBodyText_only {
              type
              primary {
                text
              }
            }
            ... on PRISMIC_ProjectBodyHighlighted_text {
              type
              primary {
                background_color
                highlighted_text
              }
            }
            ... on PRISMIC_ProjectBodyStudy_halls {
              type
              fields {
                label
                link {
                  ... on PRISMIC_Study_hall {
                    _meta {
                      uid
                      type
                      lang
                    }
                  }
                }
              }
            }
            ... on PRISMIC_ProjectBodySupporters {
              type
              primary {
                supporters_title
              }
              fields {
                image
              }
            }
            ... on PRISMIC_ProjectBodyTwo_column {
              type
              fields {
                details
                title
              }
            }
            ... on PRISMIC_ProjectBodyStatistics_row {
              type
              fields {
                stat_number
                stat_text
              }
            }
            ... on PRISMIC_ProjectBodyProject_structure {
              type
              fields {
                big_image
                small_image
                text
              }
            }
            ... on PRISMIC_ProjectBodyTitle_with_closing {
              type
              primary {
                closing_date
              }
            }
            ... on PRISMIC_ProjectBodyTitle_only {
              type
              primary {
                title
              }
            }
            ... on PRISMIC_ProjectBodySmall_details_row {
              type
              fields {
                title
                text
                image
              }
            }
            ... on PRISMIC_ProjectBodyFull_width_quote {
              type
              primary {
                color
                text
                title_icon
              }
            }
            ... on PRISMIC_ProjectBodyFull_width_image {
              type
              primary {
                image
                is_last_slice
              }
            }
            ... on PRISMIC_ProjectBodyImage_row {
              type
              primary {
                image_center
                image_left
                image_right
              }
            }
            ... on PRISMIC_ProjectBodyImage_and_description {
              type
              primary {
                color
                description
                image
                title_icon
              }
            }
            ... on PRISMIC_ProjectBodyImage_collage {
              type
              primary {
                background_color
                big_image_positioin
                image_big
                image_small_1
                image_small_2
              }
            }
            ... on PRISMIC_ProjectBodyHero_image_complex {
              type
              primary {
                title
                main_description
                background_image
                hero_color
                description
                foreground_image
              }
            }
            ... on PRISMIC_ProjectBodyImage_grid {
              type
              fields {
                image
              }
              primary {
                background_color
              }
            }
            ... on PRISMIC_ProjectBodyImage_with_description {
              type
              primary {
                background_color_a
                background_color_b
                description_a
                description_b
                icon_a
                icon_b
                image_a
                image_b
              }
            }
            ... on PRISMIC_ProjectBodyThumbnails {
              type
              fields {
                label
                link {
                  ... on PRISMIC_Projects {
                    _meta {
                      lang
                      type
                      uid
                    }
                  }
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
            ... on PRISMIC_ProjectBodyFull_width_image_and_text {
              type
              primary {
                title
                text
                image
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