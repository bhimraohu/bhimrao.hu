import React from 'react';

import Hero from './Hero';
import IntroText from './IntroText';

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
              <div key={idx}>activities_row</div>
            )
          case "top_news":
            return (
              <div key={idx}>top_news</div>
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