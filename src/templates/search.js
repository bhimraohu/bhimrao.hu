import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
// import SliceZone from "../components/sliceZone"

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
        <div>
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit volutpat laoreet. Suspendisse eget volutpat justo, in consectetur erat. Donec quis augue dapibus, volutpat ante finibus, blandit ex. Donec egestas libero et metus efficitur, ornare elementum purus vulputate. Nullam eros dui, laoreet vitae auctor eu, dapibus et lacus. Quisque dapibus ipsum ultricies enim convallis, pretium accumsan augue dignissim. Integer metus massa, pulvinar et est ac, fringilla interdum enim. Aenean ornare in metus et consectetur. Quisque hendrerit pulvinar est vel placerat. Nam interdum ipsum in venenatis porttitor. Nunc sed dui sed nisl ultrices tincidunt at tincidunt ipsum. Vestibulum molestie elit augue, non convallis nisl molestie sed. Ut eu tellus posuere, viverra dui id, molestie neque.

          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ligula leo, elementum a urna eget, sollicitudin fringilla libero. Sed felis augue, vulputate condimentum ante nec, dapibus facilisis nibh. Proin tincidunt turpis nulla, sit amet rhoncus sapien consectetur at. Aliquam fermentum rutrum purus, sed congue mi mattis vel. Mauris iaculis nec dolor sed hendrerit. Quisque suscipit porta sem sit amet porttitor. Praesent molestie sapien vel sem commodo, congue scelerisque neque eleifend.

          Pellentesque gravida finibus sem, at pretium turpis. Aliquam eu volutpat risus. Nullam sollicitudin condimentum mi id aliquet. Fusce mi ipsum, tempor vel elit non, sollicitudin congue massa. Etiam molestie lectus vitae imperdiet tempor. Suspendisse nec risus in dolor sodales rhoncus ac eu turpis. Integer at molestie nisi. Curabitur scelerisque metus at mauris pretium rhoncus. In lacinia interdum nibh nec cursus. Ut eu posuere felis. In urna metus, porttitor nec nulla sed, eleifend feugiat odio. Mauris congue fermentum efficitur. Vestibulum pretium neque turpis, et feugiat magna dapibus sed. Vivamus odio dolor, tempor a rutrum ac, faucibus nec diam. Aenean efficitur efficitur ante et blandit. Proin ac lectus at felis sollicitudin elementum.

          Vestibulum rutrum purus non diam posuere, at laoreet lorem pellentesque. Mauris venenatis tellus ut sagittis efficitur. Proin eu posuere justo. Proin lectus leo, vulputate sit amet eleifend ac, sodales ac tortor. Vivamus ac egestas augue. Aliquam faucibus varius mattis. Praesent condimentum blandit dignissim. Curabitur ut cursus leo, quis malesuada nulla.

          Ut augue lectus, porta interdum eros sit amet, accumsan tempus leo. Donec ipsum leo, ultrices at tincidunt sed, pharetra a erat. Duis elementum justo nec ipsum efficitur, nec posuere massa malesuada. Aliquam laoreet libero sit amet neque aliquam bibendum. Suspendisse viverra sed dui id tempor. Ut a ipsum id nibh consectetur efficitur. Sed erat velit, dapibus a risus nec, aliquam condimentum leo. Donec sodales enim eget ipsum pharetra, id posuere risus venenatis. Aliquam finibus eleifend justo dignissim rutrum. Nunc fermentum vitae purus eu ullamcorper.


        </div>
        {/* <SliceZone body={this.props.data.prismic.allHomepages.edges[0].node.body} /> */}
      </Layout >
    );
  }
}

export default Search;

export const query = graphql`
query searchQuery($lang: String) {
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