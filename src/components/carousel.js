import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"

export default ({ images }) => {
  return (
    <Slider
      arrows={false}
      autoplay={true}
      autoplaySpeed={4500}
      speed={750}
      style={{ maxHeight: `350px`, height: `350px` }}
    >
      {images.map(({ node }) => {
        return (
          <div key={node.id}>
            <Img
              style={{ maxHeight: `350px`, height: `350px` }}
              fluid={node.childImageSharp.fluid}
              alt={node.name}
            />
          </div>
        )
      })}
    </Slider>
  )
}
