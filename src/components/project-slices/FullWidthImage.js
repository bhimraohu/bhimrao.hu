import React from 'react';
import styled from 'styled-components';

const FullWidthImageWrapper = styled.section`
  padding-top: 5rem;
  width: 100%;

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