import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ location }) => (
  <Layout location={location}>
    <SEO title="Welcome" />
    <p>
      Hi. I'm Micah. I like to learn, create, and eat bacon. This is my site.
    </p>
  </Layout>
)
