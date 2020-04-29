import React from 'react';
import './Navbar.css'
import Logo from "./Logo";

class Navbar extends React.Component {
    render() {
        return(
            <div className="container-fluid" id="menuPrincipal">
                <Logo/>
            </div>
        );
    }
}

export default Navbar;