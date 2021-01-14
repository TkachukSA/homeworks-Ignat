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
                    <li><NavLink to={PATH.Juniorplus} activeClassName="activeClassLink">JuniorPlus</NavLink></li>
                    <li><NavLink to={PATH.HW1} activeClassName="activeClassLink">Homeworks 1</NavLink></li>
                    <li><NavLink to={PATH.HW2} activeClassName="activeClassLink">Homeworks 2</NavLink></li>
                    <li><NavLink to={PATH.HW3} activeClassName="activeClassLink">Homeworks 3</NavLink></li>
                    <li><NavLink to={PATH.HW4} activeClassName="activeClassLink">Homeworks 4</NavLink></li>
                    <li><NavLink to={PATH.HW6} activeClassName="activeClassLink">Homeworks 6</NavLink></li>
                    <li><NavLink to={PATH.HW7} activeClassName="activeClassLink">Homeworks 7</NavLink></li>
                    <li><NavLink to={PATH.HW8} activeClassName="activeClassLink">Homeworks 8</NavLink></li>
                    <li><NavLink to={PATH.HW9} activeClassName="activeClassLink">Homeworks 9</NavLink></li>
                    <li><NavLink to={PATH.HW10} activeClassName="activeClassLink">Homeworks 10</NavLink></li>
                    <li><NavLink to={PATH.HW11} activeClassName="activeClassLink">Homeworks 11</NavLink></li>
                    <li><NavLink to={PATH.HW12} activeClassName="activeClassLink">Homeworks 12</NavLink></li>
                    <li><NavLink to={PATH.Testspage} activeClassName="activeClassLink">Testspage</NavLink></li>
                    <li><NavLink to={PATH.Junior} activeClassName="activeClassLink">Junior</NavLink></li>
                </div>
            </ul>


        </div>
    );
}

export default Header;
