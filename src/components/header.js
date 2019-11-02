import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Toggle from "../components/toggle"
import siteLogo from "../assets/img/logo-supersimple-vertical.svg"
import "../assets/scss/styles.scss"

const Header = ({ siteTitle }) => (
  <header class="site-header">
    <div class="container">
      <nav id="main-menu" class="navbar">
        <ul>
          <li id="brand"><Link to="/"><img src={siteLogo} alt={siteTitle} /></Link></li>
          <li><Link to="/services">Nos services</Link></li>
          <li><Link to="/contact">Nous contacter</Link></li>
        </ul>
        <Toggle />
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
