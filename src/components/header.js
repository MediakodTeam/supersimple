import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Toggle from "../components/toggle"
import siteLogo from "../assets/img/logo-supersimple-vertical.svg"
import "../assets/scss/styles.scss"

function Header({ siteTitle }) {
  const [navbarState, setNavbarState] = useState(false);

  function handleToggleClick(ariaPressedState) {
    // Au changement du togge,
    // on recupère son état,
    // et on l'assigne à l'état de la navbar
    setNavbarState(ariaPressedState)
  }

  return (
    <header class="site-header">
      <div class="container">
        <nav id="main-menu" class={`navbar ${navbarState ? 'navbar--active' : ''}`}>
          <ul>
            <li id="brand"><Link to="/"><img src={siteLogo} alt={siteTitle} /></Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/contact">Nous contacter</Link></li>
          </ul>
          <Toggle onToggleUpdate={handleToggleClick} />
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
