import React from "react"

import Header from "../header/HeaderCmp"
import Footer from "../footer/FooterCmp"

import "../../../static/styles/common.css"
import "../../../static/styles/Glyphter.css"
import "../../../static/styles/layout.css"

const Layout = ({ children, navigationData }) => {

  return (
    <>
      <Header navigationData={navigationData} />
      <div style={{ margin: `0 auto` }}>
        <main>{children}</main>
      </div>
      <Footer data={navigationData.allFooters} />
    </>
  )
}

export default Layout
