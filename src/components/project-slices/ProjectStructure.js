import React from 'react';
import styled from 'styled-components';
import { DesignSettings } from '../../utils/constants';

import RichTextCustom from '../common/RichTextCustom';

const ProjectStructureWrapper = styled.section`
  width: ${DesignSettings.textWidth};
  margin: 6rem auto;
  margin-top: 4rem;

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    width: 100% !important;

    .card-container {
      flex-direction: column !important;
      margin-bottom: 5rem !important;

      &:nth-of-type(2) {
        flex-direction: column-reverse !important;
      } 

      p {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .big-image {
        width: initial !important;
      }

      .image-container {
        &.odd {
          margin-right: 0 !important;
        }
        &.even {
          margin-left: 0 !important;
        }
      }
    }
  }

  .card-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .card-container {
      display: flex;
      margin-bottom: 8rem;
    
      p {
        font-size: 2rem;
        color: var(--text-color);
        line-height: 160%;
      }

      .big-image {
        width: 45%;
      }

      .image-container {
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

  [class~='card-container']:last-of-type  {
    margin-bottom: 0;
  }
`;

const ProjectStructure = ({ fields }) => {
  return (
    <ProjectStructureWrapper>
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