import React from 'react';

import Hero from '../common/Hero';
import Activities from './Activities';
import StatisticsRow from './StatisticsRow';
import Goals from './Goals';

const SliceZone = ({ body }) => (
  <div>
    {
      body.map((bodyContent, idx) => {
        switch (bodyContent.type) {
          case "hero_image":
            return (
              <Hero
                key={idx}
                color={bodyContent.primary.hero_color}
                title={bodyContent.primary.hero_title}
                content={bodyContent.primary.hero_content}
                backgroundImage={bodyContent.primary.hero_image.url}
              />
            )
          case "activities":
            return (
              <Activities
                key={idx}
                title={bodyContent.primary.title}
                content={bodyContent.primary.content}
                highlighted_text={bodyContent.primary.highlighted_text}
                content_part_2={bodyContent.primary.content_part_2}
                link={bodyContent.primary.link}
                link_label={bodyContent.primary.link_label}
              />
            )
          case "statistics_row":
            return (
              <StatisticsRow
                key={idx}
                explanation={bodyContent.primary.explanation}
                fields={bodyContent.fields}
              />
            )
          case "goals":
            return (
              <Goals
                key={idx}
                title={bodyContent.primary.title}
                fields={bodyContent.fields}
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