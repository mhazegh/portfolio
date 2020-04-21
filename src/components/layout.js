import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavLink from "../components/nav-link"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import Carousel from "../components/carousel"

const Layout = ({ location, children }) => {
  console.log(location.pathname)
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.jpg" }) {
        id
        childImageSharp {
          fixed(width: 350, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mainBannerImages: allFile(
        filter: { relativeDirectory: { eq: "main_banner" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      projectBannerImages: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              featuredImage {
                id
                name
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  const projectImages = data.projectBannerImages.edges.map(edge => {
    return {
      node: {
        id: edge.node.frontmatter.featuredImage.id,
        name: edge.node.frontmatter.featuredImage.name,
        childImageSharp: edge.node.frontmatter.featuredImage.childImageSharp,
      },
    }
  })
  let header = (
    <div>
      <div
        style={{
          textAlign: `right`,
        }}
      >
        <NavLink to="/">
          <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
        </NavLink>
      </div>
      {location.pathname === rootPath && (
        <Carousel images={data.mainBannerImages.edges}></Carousel>
      )}
      {(location.pathname === `${rootPath}projects` ||
        location.pathname === `${rootPath}projects/`) && (
        <Carousel images={projectImages}></Carousel>
      )}
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </ul>
      <hr />
    </div>
  )

  if (location.pathname === rootPath) {
    // page specific code
  } else {
    // page specific code
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: `center`,
          paddingTop: `${rhythm(1)}`,
        }}
      >
        Micah Hazegh | mhazegh@gmail.com
      </footer>
    </div>
  )
}

export default Layout
