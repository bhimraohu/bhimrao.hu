import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/LayoutCmp"
import SearchPage from '../components/search/SearchPage';

class Search extends React.Component {

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
        <SearchPage
          node={this.props.data.prismic.allSearchs.edges[0].node}
          navigationData={{
            allHeader_navbars: this.props.data?.prismic?.allHeader_navbars.edges[0].node,
            allAbout_uss: this.props.data?.prismic?.allAbout_uss,
            allNews_items: this.props.data?.prismic?.allNews_items,
            allProjects: this.props.data?.prismic?.allProjects,
            allProjectss: this.props.data?.prismic?.allProjectss?.edges[0].node,
            allStudy_halls: this.props.data?.prismic?.allStudy_halls,
          }}
        />
      </Layout >
    );
  }
}

export default Search;

export const query = graphql`
query searchQuery($lang: String) {
  prismic {
    allSearchs (lang: $lang) {
      edges {
        node {
          title
          search_placeholder
          explanation_text
          no_result
          categories {
            category
            type
            link {
              ... on PRISMIC_About_us {
                _meta {
                  uid
                  type
                  lang
                }
              }
              ... on PRISMIC_News {
                title
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


    allAbout_uss(lang: $lang) {
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
    
    allNews_items(lang: $lang) {
      edges {
        node {
          _meta {
            lang
            uid
            type
          }
          title
        }
      }
    }
  
    allProjects(lang: $lang) {
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

    allProjectss (lang: $lang) {
      edges {
        node {
          body {
            ... on PRISMIC_ProjectsBodyProjects {
              fields {
                title
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
            ... on PRISMIC_ProjectsBodyClosed_projects {
              fields {
                link_label
                link {
                  ... on PRISMIC_Project {
                    _meta {
                      lang
                      uid
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    allStudy_halls (lang: $lang) {
      edges {
        node {
          title
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
`;