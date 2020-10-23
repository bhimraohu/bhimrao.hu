import React from 'react';

import Hero from './Hero';
import IntroText from './IntroText';
import ActivitiesRow from './ActivitiesRow';
import TopNews from './TopNews';

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
              />
            )
          case "intro_text":
            return (
              <IntroText
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
              <div key={idx}>supporters</div>
            )
          case "bottom_hero":
            return (
              <div key={idx}>bottom_hero</div>
            )
          default:
            return null;
        }
      })
    }
  </div>
)

export default SliceZone;