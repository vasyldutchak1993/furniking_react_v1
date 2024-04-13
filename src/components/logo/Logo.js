import logo from "../../assets/img/log.svg";
import React from "react";

function Logo(props) {
    return (
        <div className="logo-container logo_cell">
            <img src={logo} alt="logo"/>
        </div>
    );
}

export default Logo;