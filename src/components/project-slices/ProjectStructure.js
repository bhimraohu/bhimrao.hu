import React from 'react';
import styled from 'styled-components';
import { DesignSettings } from '../../utils/constants';

import RichTextCustom from '../common/RichTextCustom';

const ProjectStructureWrapper = styled.section`
  width: ${DesignSettings.innerWidth};
  margin: 6rem auto;
  margin-top: 4rem;

  .card-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .card-container {
      display: flex;
    
      p {
        font-size: 2rem;
      }

      .big-image {
        width: 45%;
      }

      .image-container{
        &.odd {
          margin-right: 5%;
        }
        &.even {
          margin-left: 5%;
        }

        img {
          width: 9rem;
        }
      }
    }
  }
`;

const ProjectStructure = ({ fields, title }) => {
  return (
    <ProjectStructureWrapper>
      <div className="h1-border-bottom">
        {/* <RichTextCustom render={title} /> */}
      </div>
      <div className="card-wrapper">
        {
          fields.map((field, idx) =>
            <div key={idx} className="card-container">
              {
                (idx + 1) % 2 === 1
                  ? getOddStyle(field)
                  : getEvenStyle(field)
              }
            </div>
          )
        }
      </div>
    </ProjectStructureWrapper>
  );
}

const getOddStyle = (field) => (
  <>
    <div className="image-container odd">
      <img src={field.small_image.url} alt={field.small_image.alt} />
      <RichTextCustom render={field.text} />
    </div>
    <img className="big-image" src={field.big_image.url} alt={field.big_image.alt} />
  </>
)

const getEvenStyle = (field) => (
  <>
    <img className="big-image" src={field.big_image.url} alt={field.big_image.alt} />
    <div className="image-container even">
      <img src={field.small_image.url} alt={field.small_image.alt} />
      <RichTextCustom render={field.text} />
    </div>
  </>
)

export default ProjectStructure;