import React from 'react';

import Hero from '../common/Hero';
import Activities from './Activities';
import StatisticsRow from '../common/StatisticsRow';
import Goals from './Goals';
import TextWithTitle from '../common/TextWithTitle';
import HighlightedText from '../common/HighlightedText';
import TextOnly from '../common/TextOnly';
import ImageRow from '../common/ImageRow';
import FullWidthImage from '../common/FullWidthImage';

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
          case "full_width_image":
            return (
              <FullWidthImage
                key={idx}
                image={bodyContent.primary.image}
              />
            );
          case "text_with_title":
            return (
              <TextWithTitle
                key={idx}
                title={bodyContent.primary.text_title}
                subtitle={bodyContent.primary.text_subtitle}
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
          case "text_only":
            return (
              <TextOnly
                key={idx}
                text={bodyContent.primary.text}
              />
            );
          case "image_row":
            return (
              <ImageRow
                key={idx}
                image_left={bodyContent.primary.image_left}
                image_center={bodyContent.primary.image_center}
                image_right={bodyContent.primary.image_right}
                isLastSlice={true}
              />
            );
          default:
            return null;
        }
      })
    }
  </div>
)

export default SliceZone;