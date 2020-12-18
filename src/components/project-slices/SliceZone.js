import React from 'react';

import Hero from '../common/Hero';
import HeroComplex from '../common/HeroComplex';
import TextWithTitle from '../common/TextWithTitle';
import HighlightedText from '../common/HighlightedText';
import StudyHalls from './StudyHalls';
import TextOnly from '../common/TextOnly';
import ImageWithDescription from './ImageWithDescription';
import ImageGrid from './ImageGrid';
import ImageCollage from './ImageCollage';
import StatisticsRow from '../common/StatisticsRow';
import SupportersRow from '../common/SupportersRow';
import ImageRow from '../common/ImageRow';
import FullWidthImage from '../common/FullWidthImage';
import FullWidthQuote from './FullWidthQuote';
import TwoColumn from './TwoColumn';
import SmallDetailRow from './SmallDetailRow';
import ProjectStructure from './ProjectStructure';
import TitleOnly from '../common/TitleOnly';
import Breadcrumb from '../common/Breadcrumb';
import FullWidthImageAndText from '../common/FullWidthImageAndText';

const SliceZone = ({ body, closed }) => (
  <div>
    {
      body.map((bodyContent, idx, arr) => {
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
                title={bodyContent.primary.text_title}
                subtitle={bodyContent.primary.text_subtitle}
                text={bodyContent.primary.text}
                closed={closed}
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
            return (
              <TextOnly
                key={idx}
                text={bodyContent.primary.text}
                isLastSlice={bodyContent.primary.is_last_slice}
              />
            );
          case "image_with_description":
            return (
              <ImageWithDescription
                key={idx}
                background_color_a={bodyContent.primary.background_color_a}
                background_color_b={bodyContent.primary.background_color_b}
                description_a={bodyContent.primary.description_a}
                description_b={bodyContent.primary.description_b}
                icon_a={bodyContent.primary.icon_a}
                icon_b={bodyContent.primary.icon_b}
                image_a={bodyContent.primary.image_a}
                image_b={bodyContent.primary.image_b}
              />
            );
          case "image_grid":
            return (
              <ImageGrid
                key={idx}
                background_color={bodyContent.primary.background_color}
                fields={bodyContent.fields}
              />
            );
          case "hero_image_complex":
            return (
              <HeroComplex
                key={idx}
                title={bodyContent.primary.title}
                hero_color={bodyContent.primary.hero_color}
                main_description={bodyContent.primary.main_description}
                description={bodyContent.primary.description}
                foreground_image={bodyContent.primary.foreground_image.url}
                background_image={bodyContent.primary.background_image.url}
              />
            );
          case "image_collage":
            return (
              <ImageCollage
                key={idx}
                background_color={bodyContent.primary.background_color}
                big_image_positioin={bodyContent.primary.big_image_positioin}
                image_big={bodyContent.primary.image_big}
                image_small_1={bodyContent.primary.image_small_1}
                image_small_2={bodyContent.primary.image_small_2}
              />
            );
          case "statistics_row":
            return (
              <StatisticsRow
                key={idx}
                fields={bodyContent.fields}
              />
            );
          case "image_and_description":
            return (
              <ImageWithDescription
                key={idx}
                background_color_a={bodyContent.primary.color}
                description_a={bodyContent.primary.description}
                icon_a={bodyContent.primary.title_icon}
                image_a={bodyContent.primary.image}
              />
            );
          case "supporters":
            return (
              <SupportersRow
                key={idx}
                title={bodyContent.primary.supporters_title}
                fields={bodyContent.fields}
              />
            )
          case "image_row":
            return (
              <ImageRow
                key={idx}
                image_left={bodyContent.primary.image_left}
                image_center={bodyContent.primary.image_center}
                image_right={bodyContent.primary.image_right}
                isLastSlice={idx === arr.length - 1}
              />
            );
          case "full_width_image":
            return (
              <FullWidthImage
                key={idx}
                image={bodyContent.primary.image}
                isLastSlice={bodyContent.primary.is_last_slice}
              />
            );
          case "full_width_quote":
            return (
              <FullWidthQuote
                key={idx}
                text={bodyContent.primary.text}
                title_icon={bodyContent.primary.title_icon}
              />
            );
          case "two_column":
            return (
              <TwoColumn
                key={idx}
                fields={bodyContent.fields}
              />
            );
          case "small_details_row":
            return (
              <SmallDetailRow
                key={idx}
                fields={bodyContent.fields}
              />
            );
          case "project_structure":
            return (
              <ProjectStructure
                key={idx}
                title={bodyContent.title}
                fields={bodyContent.fields}
              />
            );
          case "title_only":
            return (
              <TitleOnly
                key={idx}
                title={bodyContent.primary.title}
              />
            );
          case "thumbnails":
            return (
              <Breadcrumb
                key={idx}
                fields={bodyContent.fields}
              />
            );
          case "full_width_image_and_text":
            return (
              <FullWidthImageAndText
                key={idx}
                title={bodyContent.primary.title}
                text={bodyContent.primary.text}
                image={bodyContent.primary.image}
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