import React from "react";

import "./Header.css"
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <div>

            <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>

            <label className="btn-menu" htmlFor="hmt">

            </label>

            <ul className="hidden-menu">
                <div className="item">
                    <li><NavLink to={PATH.PRE_JUNIOR} activeClassName="activeClassLink">Main Page</NavLink></li>
                    <li><NavLink to={PATH.HW1} activeClassName="activeClassLink">Homeworks 1</NavLink></li>
                    <li><NavLink to={PATH.HW2} activeClassName="activeClassLink">Homeworks 2</NavLink></li>
                    <li><NavLink to={PATH.HW3} activeClassName="activeClassLink">Homeworks 3</NavLink></li>
                    <li><NavLink to={PATH.HW4} activeClassName="activeClassLink">Homeworks 4</NavLink></li>
                    <li><NavLink to={PATH.Juniorplus} activeClassName="activeClassLink">Juniorplus</NavLink></li>
                    <li><NavLink to={PATH.Testspage} activeClassName="activeClassLink">Testspage</NavLink></li>
                    <li><NavLink to={PATH.Junior} activeClassName="activeClassLink">Junior</NavLink></li>
                </div>
            </ul>


        </div>
    );
}

export default Header;
