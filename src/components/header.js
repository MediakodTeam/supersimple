import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import Toggle from "../components/toggle"
import siteLogo from "../assets/img/logo-supersimple-vertical.svg"
import "../assets/scss/styles.scss"

function Header({ siteTitle }) {
  const [navbarState, setNavbarState] = useState(false);
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  
  function handleToggleClick(ariaPressedState) {
    // Au changement du togge,
    // on recupère son état,
    // et on l'assigne à l'état de la navbar
    setNavbarState(ariaPressedState)

    if (ariaPressedState === true) {
      firstElement.current.tabIndex = 0
      secondElement.current.tabIndex = 0
      firstElement.current.focus()
    } else {
      firstElement.current.tabIndex = -1
      secondElement.current.tabIndex = -1
    }
  }

  return (
    <header className="site-header">
      <div className="container">
        <nav id="main-menu" className={`navbar ${navbarState ? 'navbar--active' : ''}`}>
          <ul>
            <li id="brand" className="base-li"><Link to="/"><img src={siteLogo} alt={siteTitle} /></Link></li>
            <li id="toggle" className="base-li"><Toggle onToggleUpdate={handleToggleClick} /></li>
            <li><Link to="/services" tabIndex="-1" ref={firstElement}>Nos services</Link></li>
            <li><Link to="/contact" tabIndex="-1" ref={secondElement}>Nous contacter</Link></li>
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
