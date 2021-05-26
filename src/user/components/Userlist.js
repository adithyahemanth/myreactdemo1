import React from "react";
import {Link, NavLink} from  "react-router-dom";

import Useritem from  "./Useritem";
import NavLinks from "../../shared/Navigation/NavLinks"


import "./Userlist.css";

const Userlist = props => 
{
 
    return (
        <center><div className="user-heading">
  <Link to='/places'><h1 className="user-style">MY USERS</h1></Link></div>
        <div className="User-list">{ props.user.map(user => (  <Useritem 
        key={user.id}
        id={user.id} 
        name={user.name}
        image={user.image} 
            />)
        
            )}
            </div>
</center>
    )

}
export default Userlist;