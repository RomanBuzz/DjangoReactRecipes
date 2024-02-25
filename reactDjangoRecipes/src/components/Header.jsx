import * as React from "react";

import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {

    return (
        <header id="home" className="header__content">

            <div className="column column--left">
                <div className="header__logo">
                    <img
                        src="https://icon666.com/r/_thumb/beb/beb05deelljx_64.png"
                        style={{ height: "28px", width: "auto" }}
                        alt="header logo"
                    />
                    <div className="header__name">{props.headerName}</div>
                </div>
            </div>
            <div className="column column--right">
                <div className="header__buttons">
                    <Link to="/">Категории</Link>
                    <Link className="button--right" to="openapi">OpenAPI</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;