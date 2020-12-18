import React from 'react';

import Hero from './Hero';
import TextWithTitle from '../common/TextWithTitle';
import ActivitiesRow from './ActivitiesRow';
import TopNews from './TopNews';
import BottomHero from './BottomHero';
import SupportersRow from '../common/SupportersRow';

const SliceZone = ({ body, news }) => (
  <div>
    {
      body.map((bodyContent, idx) => {
        switch (bodyContent.type) {
          case "hero_image":
            return (
              <Hero
                key={idx}
                title={bodyContent.primary.hero_title}
                subtitle={bodyContent.primary.hero_subtitle}
                content={bodyContent.primary.hero_content}
                backgroundImage={bodyContent.primary.background_image.url}
                backgroundImageMobile={bodyContent.primary.background_image_mobile.url}
              />
            )
          case "intro_text":
            return (
              <TextWithTitle
                key={idx}
                title={bodyContent.primary.intro_title}
                text={bodyContent.primary.intro_text}
              />
            )
          case "activities_row":
            return (
              <ActivitiesRow
                key={idx}
                fields={bodyContent.fields}
              />
            )
          case "top_news":
            return (
              <TopNews
                key={idx}
                title={bodyContent.primary.title}
                news={news}
              />
            )
          case "supporters":
            return (
              <SupportersRow
                key={idx}
                title={bodyContent.primary.title}
                fields={bodyContent.fields}
              />
            )
          case "bottom_hero":
            return (
              <BottomHero
                key={idx}
                icon={bodyContent.primary.hero_bottom_icon}
                content={bodyContent.primary.hero_bottom_content}
                backgroundImage={bodyContent.primary.hero_bottom_image?.url}
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