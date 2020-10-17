import React from "react"
import styled from "styled-components"

const IconWrapper = styled.span`
  i {
    padding: 5px;
  }
`;

const Icon = (props) => {
  return (
    <IconWrapper>
      <i className={props.icon_class} />
    </IconWrapper>
  )
};

export default Icon;
