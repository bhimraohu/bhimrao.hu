import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import { Colors, DesignSettings } from "../../utils/constants";
import { linkResolverBase } from '../../utils/linkResolverBase';

const NavigationLinksWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.outerWidth};
  display: flex;
  justify-content: space-between;

  .item-link {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-decoration: none;
    color: #63615B;
    background-color: #DEDBCB;
    cursor: pointer;
    width: calc(100% / 6);
    border: .1rem solid white;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${Colors.red};
    }

    &.selected {
      color: ${Colors.dirtyWhite};
      background-color: ${Colors.red};
    }
  }
`;

const NavigationLinks = ({ fields }) => {
  return (
    <NavigationLinksWrapper>
      {
        fields.map((field, idx) => {
          return getCrumb(field, idx)
        })
      }
    </NavigationLinksWrapper>
  );
}

const getCrumb = (field, idx) => {
  return (
    <Link
      key={idx}
      to={linkResolverBase(field.link._meta)}
      className={field.selected ? 'item-link selected' : 'item-link'}
    >
      <span>{field.label}</span>
    </Link>
  )
}

export default NavigationLinks;