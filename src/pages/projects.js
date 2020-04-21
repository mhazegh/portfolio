import React from "react"
import projectStyles from "./projects.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug}>
            <header>
              <h4
                style={{
                  marginTop: `${rhythm(1.25)}`,
                  lineHeight: `${rhythm(1)}`,
                }}
              >
                <Link to={node.fields.slug} style={{ color: `#736F6E` }}>
                  {node.frontmatter.title}
                </Link>
              </h4>
            </header>
            <section className={projectStyles.projects}>
              <Link
                to={node.fields.slug}
                style={{ boxShadow: `none`, marginRight: `${rhythm(1)}` }}
              >
                <Img
                  fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                  alt="thumbnail"
                />
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                fixed(width: 200, height: 200, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
