import React from 'react';

import BottomHero from './BottomHero';
import Dropdown from './Dropdown';
import Projects from './Projects';

const SliceZone = ({ body }) => (
  <div>
    {
      body.map((bodyContent, idx) => {
        switch (bodyContent.type) {
          case "projects":
            return (
              <Projects
                key={idx}
                fields={bodyContent.fields}
              />
            )
          case "closed_projects":
            return (
              <Dropdown
                key={idx}
                title={bodyContent.primary.title}
                fields={bodyContent.fields}
              />
            )
          case "bottom_hero":
            return (
              <BottomHero
                key={idx}
                backgroundImage={bodyContent.primary.image.url}
              />
            )
          default:
            return null;
        }
      })
    }
  </div>
)

export default SliceZone;