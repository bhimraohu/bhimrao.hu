import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import { Colors, DesignSettings } from "../../utils/constants";
import Icon from "../common/IconCmp";
import { linkResolverBase } from '../../utils/linkResolverBase';

const DropdownWrapper = styled.section`

  @media screen and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 1050px) {
    .dropdown-wrapper {
      width: 100% !important;
    }
    .dropdown-title {
      width: 100% !important;
    }
  }

  .dropdown-wrapper {
    margin: 0 auto;
    width: ${DesignSettings.innerWidth};
    display: flex;
    flex-direction: column;
    height: 10.4rem;
    margin-bottom: 3rem;

    &:hover span i::before {
      transform: rotate(180deg);
      transition: transform .5s;
    }

    .dropdown-title {
      margin: 0 auto;
      width: ${DesignSettings.innerWidth};
      background: ${Colors.main};
      color: ${Colors.dirtyWhite};
      display: flex;
      justify-content: space-between;
      padding: 4rem 2rem;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;

      i::before {
        transform: rotate(0deg);
        transition: transform .5s;
      }
    }

    &:hover ul {
      visibility: visible;
    }
  }
`;

const DropdownList = styled.ul`
  visibility: hidden;
  z-index: 1;
  list-style-type: none;

  .dropdown-item {
    background: ${Colors.imageRowBackground};
    border: 1px solid ${Colors.lightGrey};
    padding: 2.5rem 2rem;
    
    > a {
      text-decoration: none;
      color: ${Colors.main};
      font-size: 2rem;
      font-weight: bold;

      &:hover {
        color: ${Colors.red};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Dropdown = ({ title, fields }) => {
  return (
    <DropdownWrapper>
      <div className="dropdown-wrapper">
        <div
          className="dropdown-title"
          role="button"
          tabIndex="0"
        >
          <span>{title}</span>
          <Icon icon_class={'icon-down'} color={Colors.red} />
        </div>

        <DropdownList>
          {
            fields.map((field, idx) =>
              <li key={idx} className="dropdown-item">
                <Link to={linkResolverBase(field.link._meta)}>
                  {field.link_label}
                </Link>
              </li>
            )
          }
        </DropdownList>
      </div>
    </DropdownWrapper >
  )
}

export default Dropdown;