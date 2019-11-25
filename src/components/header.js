import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import siteLogo from "../assets/img/logo-supersimple-vertical.svg"
import "../assets/scss/styles.scss"

function Header({ siteTitle }) {
  return (
    <header className="site-header">
      <div className="container">
        <nav id="main-menu" class="navbar">
          <ul>
            <li id="brand"><Link to="/"><img src={siteLogo} alt={siteTitle} /></Link></li>
            <li className="home-link"><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/contact">Nous contacter</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
