import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"
import {PATH} from "./Routes";

function Header() {
    return (
        <div>

            <input type="checkbox" id="hmt" className="hidden-menu-ticker" onMouseOver={event => event.currentTarget}/>

            <label className="btn-menu" htmlFor="hmt">

            </label>

            <ul className="hidden-menu">

                <li><NavLink to={"/pre-junior"}>Main Page</NavLink></li>
                <li> <NavLink to={"/Juniorplus"}>xxx</NavLink></li>


                <li><NavLink to={"/Testspage"}>Testspage</NavLink></li>
                <li><NavLink to={"/Junior"}>junior</NavLink></li>
            </ul>


        </div>
    );
}

export default Header;
