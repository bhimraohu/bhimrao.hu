import React from "react"
import styled from "styled-components"

const IconWrapper = styled.span`
  i {
    padding: .5rem;

    &:before {
      font-size: ${(props) => props.size ? props.size : '1.5rem'};
      color: ${(props) => props.color};
      vertical-align: ${(props) => props.color ? 'middle' : 'inherit'};
    }
  }
`;

const Icon = (props) => {
  return (
    <IconWrapper color={props.color} size={props.size}>
      <i className={props.icon_class} />
    </IconWrapper>
  )
};

export default Icon;
