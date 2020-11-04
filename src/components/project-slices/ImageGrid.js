import React from 'react';
import styled from 'styled-components';

const ImageGridWrapper = styled.section`
  margin: 5rem auto;
  padding: 10rem;
  background-color: ${props => props.background_color};

  .image-grid-wrapper {
    margin: 0 auto;

    img {
      width: 33%;
      padding: 1%;
    }
  }
`;

const ImageGrid = ({ background_color, fields }) => {
  return (
    <ImageGridWrapper background_color={background_color}>
      <div className="image-grid-wrapper">
        {
          fields.map((item, idx) => {
            return (
              <img key={idx} src={item.image.url} alt={item.image.alt} />
            )
          })
        }
      </div>
    </ImageGridWrapper>
  );
}

export default ImageGrid;