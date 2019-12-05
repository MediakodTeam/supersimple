import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: page inexistante" lang="fr" />
    <h1>Page 404</h1>
    <p>La page recherchée ne semble pas/plus exister.</p>
  </Layout>
)

export default NotFoundPage
