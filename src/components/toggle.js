import React from "react"

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClick)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick)
    }
    handleClick(event) {  
        let pressed = event.target.getAttribute('aria-pressed') === 'true'
        event.target.setAttribute('aria-pressed', String(!pressed))
        event.preventDefault()
        let navbars = document.querySelectorAll('.navbar')
        navbars.forEach(function(el) {
            el.classList.toggle('navbar--active')
        })
        return;
    }
    render() {
        return <button aria-label="Menu" aria-controls="main-menu" aria-pressed="false">Menu</button>
    }
}

export default Toggle
