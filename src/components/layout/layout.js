import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/Header"
import Footer from "../footer/Footer"

import "../../../static/styles/common.css"
import "../../../static/styles/Glyphter.css"
import "../../../static/styles/layout.css"

const Layout = ({ children, navigationData }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
