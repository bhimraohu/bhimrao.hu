import React from 'react';
import styled from 'styled-components';

const FullWidthImageWrapper = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  width: 100%;

  @media screen and (max-width: 950px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem !important;
  }

  .image-grid-wrapper {
    display: flex;
  }
`;

const FullWidthImage = ({ image }) => {
  return (
    <FullWidthImageWrapper>
      <div className="image-grid-wrapper">
        <img src={image.url} alt={image.alt} />
      </div>
    </FullWidthImageWrapper>
  );
}

export default FullWidthImage;