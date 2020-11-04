import React from 'react';
import styled from 'styled-components';

import { DesignSettings } from "../../utils/constants";
import ImageRow from '../common/ImageRow';
import Breadcrumb from '../common/Breadcrumb';
import TitleOnly from '../common/TitleOnly';
import TextOnly from '../common/TextOnly';
import FullWidthImage from '../common/FullWidthImage';
import ImageCollageWithText from './ImageCollageWithText';
import NavigationLinks from './NavigationLinks';

const StudyHallWrapper = styled.section`
  margin: 0 auto;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: ${DesignSettings.outerWidth};
`;

const StudyHallPage = ({ items }) => {
  console.log(items)
  return (
    <StudyHallWrapper>
      <MainContainer>
        <NavigationLinks fields={items.links} />

        <Breadcrumb fields={items.thumbnails} />

        <TitleOnly title={items.title} />

        <TextOnly text={items.text_part_1} />

        <FullWidthImage image={items.image} />

        <TextOnly text={items.text_part_2} />

        <ImageCollageWithText
          big_image_positioin={items.image_collage[0].big_image_positioin}
          collage_description={items.image_collage[0].collage_description}
          collage_title={items.image_collage[0].collage_title}
          description_position={items.image_collage[0].description_position}
          image_big={items.image_collage[0].image_big}
          image_small={items.image_collage[0].image_small}
        />

        <TextOnly text={items.text_part_3} />
      </MainContainer>

      <ImageRow
        image_left={items.image_row[0].image_left}
        image_center={items.image_row[0].image_center}
        image_right={items.image_row[0].image_right}
        isLastSlice={true}
      />
    </StudyHallWrapper>
  )
}
export default StudyHallPage;