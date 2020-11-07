import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import { Colors, DesignSettings } from "../../utils/constants";
import { linkResolverBase } from '../../utils/linkResolverBase';

const BreadcrumbWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.outerWidth};

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .item-link {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-decoration: none;
    color: ${Colors.textColor};
    cursor: pointer;

    &.red {
      color: ${Colors.red};
    }
  }
`;

const Breadcrumb = ({ fields }) => {

  return (
    <BreadcrumbWrapper>
      {
        fields.map((field, idx, arr) => {
          return arr.length - 1 !== idx
            ? getCrumb(field, idx)
            : getLastCrumb(field, idx)
        })
      }
    </BreadcrumbWrapper>
  );
}

const getCrumb = (field, idx) => {
  return (
    <Link
      key={idx}
      to={linkResolverBase(field.link._meta)}
      className="item-link"
    >
      <span>{field.label} &gt; </span>
    </Link>
  )
}

const getLastCrumb = (field, idx) => {
  return (
    <Link
      key={idx}
      to={linkResolverBase(field.link._meta)}
      className="item-link red"
    >
      <span>{field.label}</span>
    </Link>
  )
}

export default Breadcrumb;