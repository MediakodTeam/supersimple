import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import useWindowSize from "../components/usewindowssize"
import Toggle from "../components/toggle"
import siteLogo from "../assets/img/logo-supersimple-vertical.svg"
import "../assets/scss/styles.scss"

function Header({ siteTitle }) {
  const [navbarState, setNavbarState] = useState(false);
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const size = useWindowSize();
  
  function handleToggleClick(ariaPressedState) {
    setNavbarState(ariaPressedState)
    if (ariaPressedState === true) {
      firstElement.current.tabIndex = "0"
      secondElement.current.tabIndex = "0"
      firstElement.current.focus()
    } else {
      firstElement.current.tabIndex = "-1"
      secondElement.current.tabIndex = "-1"
    }
  }

  //tabindex="-1" with @media(min-width: 43.25rem)
  return (
    <header className="site-header">
      <div className="container">
        <nav id="main-menu" className={`navbar ${navbarState ? 'navbar--active' : ''}`}>
          <ul>
            <li id="brand" className="base-li"><Link to="/"><img src={siteLogo} alt={siteTitle} /></Link></li>
            <li id="toggle" className="base-li"><Toggle onToggleUpdate={handleToggleClick} /></li>
            <li><Link to="/services" tabIndex={size.width < 693 ? "-1" : "0"} ref={firstElement}>Nos services</Link></li>
            <li><Link to="/contact" tabIndex={size.width < 693 ? "-1" : "0"} ref={secondElement}>Nous contacter</Link></li>
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
