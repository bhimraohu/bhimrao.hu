import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Colors } from "../../utils/constants";

const BrandingWrapper = styled.div`
  a {
    text-decoration: none;
    color: ${Colors.main};
    font-size: 2rem;
    font-weight: bold;
    height: 6.6rem;
  }

  .logo {
    height: 6.6rem;
  }
`;

const Branding = ({ navigationData }) => {
  return (
    <BrandingWrapper>
      <Link to="/">
        {
          navigationData?.allHeader_navbars?.brand_logo_image?.url
            ? <img
              className="logo"
              src={navigationData.allHeader_navbars.brand_logo_image.url}
              alt={navigationData.allHeader_navbars.brand_logo_image.alt} />
            : navigationData.allHeader_navbars.branding
        }
      </Link>
    </BrandingWrapper>
  )
};

export default Branding;
