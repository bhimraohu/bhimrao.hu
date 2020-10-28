import React from 'react';

import Hero from '../common/Hero';
import TextWithTitle from './TextWithTitle';
import HighlightedText from './HighlightedText';
import StudyHalls from './StudyHalls';

const SliceZone = ({ body }) => (
  <div>
    {
      body.map((bodyContent, idx) => {
        console.log(bodyContent.type)
        switch (bodyContent.type) {
          case "hero_image":
            return (
              <Hero
                key={idx}
                color={bodyContent.primary.hero_color}
                title={bodyContent.primary.hero_title}
                content={bodyContent.primary.hero_description}
                backgroundImage={bodyContent.primary.hero_image.url}
              />
            );
          case "text_with_title":
            return (
              <TextWithTitle
                key={idx}
                text_title={bodyContent.primary.text_title}
                text_subtitle={bodyContent.primary.text_subtitle}
                text={bodyContent.primary.text}
              />
            );
          case "highlighted_text":
            return (
              <HighlightedText
                key={idx}
                background_color={bodyContent.primary.background_color}
                highlighted_text={bodyContent.primary.highlighted_text}
              />
            );
          case "study_halls":
            return (
              <StudyHalls
                key={idx}
                fields={bodyContent.fields}
              />
            );
          case "text_only":
          case "text_with_title":
          case "image_with_description":
          case "image_grid":
          case "hero_image_complex":
          case "image_collage":
          case "image_and_description":
          case "image_row":
          case "full_width_image":
          case "full_width_quote":
          case "small_details_row":
          case "project_structure":
          case "statistics_row":
          case "two_column":
          case "supporters":
          default:
            return null;
        }
      })
    }
  </div>
)

export default SliceZone;