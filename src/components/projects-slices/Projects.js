import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import { linkResolverBase } from '../../utils/linkResolverBase';

const ProjectsWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.innerWidth};

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingLeft};
  }

  @media screen and (max-width: 1050px) {
    width: 100%;

    .odd {
      flex-direction: column !important;
      height: initial !important;

      .content-container {
        margin-right: 0 !important;
      }
    }
    
    .even {
      flex-direction: column-reverse !important;
      height: initial !important;

      .content-container {
        margin-left: 0 !important;
      }
    }
    
    .project-image {
      width: initial !important;
      height: initial !important;
      margin: 3rem 0 !important;
      align-self: center !important;
    }


    .button-container {
      display: none;
    }

    .button-container-mobile {
      display: flex !important;
      justify-content: flex-start;
    }
  }
  
  @media screen and (max-width: 600px) {
    .project-container {
      margin: 2rem 0 !important;
    }
  }

  .projects-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    .project-container {
      font-size: 2rem;
      margin: 5rem 0;

      .h1-border-bottom > h1 {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      .odd,
      .even {
        display: flex;
        flex-direction: row;
        min-height: 36rem;
      }

      .project-image {
        width: 41rem;
        height: 26rem;
        margin-top: 10rem;
        align-self: flex-start;
        box-shadow: 0px 0px 2px 0px grey;
      }

      .even .content-container {
        margin-left: 5rem;
      }

      .odd .content-container {
        margin-right: 5rem;
      }

      .content-container > p {
        margin-bottom: 2rem;
      }

      .content-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      .button-container-mobile {
        display: none;
      }

      .button-container,
      .button-container-mobile {
        margin-top: 2rem;
        
        a {
          display: inline-block;
          text-decoration: none;
          color: ${Colors.red};
          line-height: 4.5rem;
          padding: 0 3rem;
          border: .2rem solid ${Colors.red};
          font-size: 1.6rem;
          font-weight: bold;

          &:hover {
            color: ${Colors.dirtyWhite};
            background-color: ${Colors.red};
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Projects = ({ fields }) => {
  return (
    <ProjectsWrapper>
      <div className="">
        <div className="projects-wrapper">
          {
            fields.map((field, idx) =>
              <div key={idx} className="project-container">
                {
                  (idx + 1) % 2 === 1
                    ? getOddStyle(field)
                    : getEvenStyle(field)
                }

              </div>
            )
          }
        </div>
      </div>
    </ProjectsWrapper>
  );
}

const getOddStyle = (field) => (
  <div className="odd">
    <div className="content-container">
      <div className="h1-border-bottom common-header common-text">
        <RichTextCustom render={field.title} />
        <RichTextCustom render={field.description} />
      </div>
      <div className="button-container">
        <Link to={linkResolverBase(field.link._meta)}>
          {field.link_label}
        </Link>
      </div>
    </div>
    <img className="project-image" src={field.image.url} alt={field.image.alt} />
    <div className="button-container-mobile">
      <Link to={linkResolverBase(field.link._meta)}>
        {field.link_label}
      </Link>
    </div>
  </div>
)

const getEvenStyle = (field) => (
  <div className="even">
    <div className="button-container-mobile">
      <Link to={linkResolverBase(field.link._meta)}>
        {field.link_label}
      </Link>
    </div>
    <img className="project-image" src={field.image.url} alt={field.image.alt} />
    <div className="content-container">
      <div className="h1-border-bottom  common-header common-text">
        <RichTextCustom render={field.title} />
        <RichTextCustom render={field.description} />
      </div>
      <div className="button-container">
        <Link to={linkResolverBase(field.link._meta)}>
          {field.link_label}
        </Link>
      </div>
    </div>
  </div>
)

export default Projects;