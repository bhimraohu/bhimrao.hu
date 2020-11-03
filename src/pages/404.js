import React from "react"

import Layout from "../components/layout/LayoutCmp"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: nem található <span role="img">😕</span></h1>
    <p>Upsz, úgy látszik, hogy nincs ilyen oldal.</p>
  </Layout>
)

export default NotFoundPage
