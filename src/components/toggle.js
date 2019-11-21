import React, { useState } from "react"

function Toggle({ onToggleUpdate }) {
    const [ariaPressed, setAriaPressed] = useState(false);

    const handleClick = () => {
        let oldState = ariaPressed

        // On mets à jour l'état
        setAriaPressed(!oldState)

        // On passe l'état dans une fonction
        // pour le passer au parent
        setTimeout(() => onToggleUpdate(!oldState), 100);
    }

    return (
        <button
            aria-label="Menu"
            aria-controls="main-menu"
            aria-pressed={ariaPressed}
            onClick={ () => handleClick() }
        >
            Menu
        </button>
    )
}

export default Toggle
