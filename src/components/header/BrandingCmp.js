import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BrandingWrapper = styled.div`
  .logo {
    height: 8rem;
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
