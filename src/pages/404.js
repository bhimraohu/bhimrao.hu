import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from "../components/layout/LayoutCmp"
import SEO from "../components/seo"
import { DesignSettings } from "../utils/constants";

const NotFoundPageWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  margin-top: 10rem;
  margin-bottom: 20rem;

  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 2rem;
  }
`;

const NotFoundPage = (props) => {
  const getNavigationData = (_props) => {
    return {
      allHeader_topbars: _props.data?.prismic?.allHeader_topbars.edges[0].node,
      allHeader_navbars: _props.data?.prismic?.allHeader_navbars.edges[0].node,
      allHeader_navigation_submenus: _props.data?.prismic?.allHeader_navigation_submenus,
      allFooters: _props.data?.prismic?.allFooters.edges[0].node,
    }
  };

  const navigationData = getNavigationData(props);

  return (
    <Layout navigationData={navigationData}>
      <NotFoundPageWrapper>

        {/* <SEO title="404: Not found" /> */}
        <h1>404: nem található <span role="img" aria-label="Sad emoji">😕</span></h1>
        <p>Upsz, úgy látszik, hogy nincs ilyen oldal.</p>
      </NotFoundPageWrapper>
    </Layout>
  )
}
export default NotFoundPage


export const query = graphql`
query notFoudPageQuery($lang: String) {
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