import React from "react"

import HeaderTopBar from "./header-top-bar"

const Header = ({ navigationData }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <HeaderTopBar topbarsData={navigationData.allHeader_topbars} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>Nav</div>
    </div>
  </header>
)

export default Header
