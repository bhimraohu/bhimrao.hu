import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import RichTextCustom from '../common/RichTextCustom';
import { Colors, DesignSettings } from "../../utils/constants";
import { linkResolverBase } from '../../utils/linkResolverBase';

const ProjectsWrapper = styled.section`
  margin: 5rem auto;
  width: ${DesignSettings.innerWidth};

  .projects-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 4rem 0;

    .project-container {
      font-size: 2rem;
      margin: 2rem 0;

      .h1-border-bottom > h1 {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      .odd,
      .even {
        display: flex;
        flex-direction: row;
        height: 36rem;
      }

      .project-image {
        width: 41rem;
        height: 26rem;
        align-self: flex-end;
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

      .button-container {
        
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
      <div className="h1-border-bottom">
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
  </div>
)

const getEvenStyle = (field) => (
  <div className="even">
    <img className="project-image" src={field.image.url} alt={field.image.alt} />
    <div className="content-container">
      <div className="h1-border-bottom">
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