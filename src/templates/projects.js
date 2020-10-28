import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SliceZone from "../components/projects-slices/sliceZone"

class Projects extends React.Component {

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
        <SliceZone body={this.props.data.prismic.allProjectss.edges[0].node.body} />
      </Layout >
    );
  }
}

export default Projects;

export const query = graphql`
query projectsQuery($lang: String) {
  prismic {

    allProjectss(lang: "hu") {
      edges {
        node {
          body {
            ... on PRISMIC_ProjectsBodyProjects {
              type
              fields {
                link_label
                title
                link {
                  ... on PRISMIC_Project {
                    closed
                    _meta {
                      uid
                      type
                      lang
                    }
                  }
                }
                image
                description
                background_color
              }
            }
            ... on PRISMIC_ProjectsBodyClosed_projects {
              type
              primary {
                title
              }
              fields {
                link_label
                link {
                  ... on PRISMIC_Project {
                    closed
                    _meta {
                      lang
                      uid
                      type
                    }
                  }
                }
              }
            }
            ... on PRISMIC_ProjectsBodyBottom_hero {
              type
              primary {
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
              ... on PRISMIC__ExternalLink {
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