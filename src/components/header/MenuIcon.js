import React from "react"
import styled from "styled-components"

import { Colors } from "../../utils/constants";

const MenuIconWrapper = styled.div`
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: ${Colors.main};
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 7px);
    transform: rotate(-45deg) translate(-8px, 7px);
  }

  .change .bar2 {opacity: 0;}

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

class MenuIcon extends React.Component {

  componentDidUpdate(prevProps) {

    this.container.classList.toggle('change');
  }

  render() {
    return (
      <MenuIconWrapper>
        <div ref={inputEl => (this.container = inputEl)} class="container">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </MenuIconWrapper>
    )
  }
};

export default MenuIcon;
