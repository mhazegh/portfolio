import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const linkStyles = {
  color: `#736F6E`,
  boxShadow: `none`,
  marginRight: `${rhythm(0.5)}`,
}

const activeStyles = {
  fontWeight: `bold`,
}

const NavLink = ({ children, to }) => (
  <Link to={to} style={linkStyles} activeStyle={activeStyles}>
    {children}
  </Link>
)

export default NavLink
