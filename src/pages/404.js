import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <Img fluid={data.file.childImageSharp.fluid} alt="404" />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 980, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
