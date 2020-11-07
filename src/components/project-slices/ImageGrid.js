import React from 'react';
import styled from 'styled-components';

const ImageGridWrapper = styled.section`
  margin: 5rem auto;
  padding: 10rem;
  background-color: ${props => props.background_color};
  margin-bottom: 0;

@media screen and (max-width: 1300px) {
  padding: 8rem 2rem;
  margin-bottom: 0;
}

@media screen and (max-width: 950px) {
  padding: 5rem 2rem;

  .image-grid-wrapper {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 50% !important;
      padding: 1%;
    }
  }
}
@media screen and (max-width: 600px) {
  .image-grid-wrapper {

    img {
      width: 100% !important;
    }
  }
}

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