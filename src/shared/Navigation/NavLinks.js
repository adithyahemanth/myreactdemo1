import React from "react";

import {NavLink} from "react-router-dom";

import "./NavLinks.css";

const NavLinks = props => {

    return(
<ul className="nav-links">
<li><NavLink to='/user' >MyUsers</NavLink></li>
<li><NavLink to={`/${props.id}/places`}>places</NavLink></li>
<li><NavLink to='/places/new'>Add places</NavLink></li>
<li><NavLink to='/auth'>Auth</NavLink></li>
</ul>
    );

}
export default NavLinks;