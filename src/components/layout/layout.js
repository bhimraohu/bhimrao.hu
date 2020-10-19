import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"

import "../../../static/styles/common.css"
import "../../../static/styles/Glyphter.css"
import "../../../static/styles/layout.css"

const Layout = ({ children, navigationData }) => {
  console.log(navigationData)

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.0875rem 0`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer data={navigationData.allFooters} />
    </>
  )
}

export default Layout
