import React from "react";
import { NavLink } from "react-router-dom";


import Userlist from "../components/Userlist"
const User= props =>

{
    const USER =[{
        id:"u1",
        name:"Adithya",
        image:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Golconda-fort.jpg",
    },
    {
        id:"u2",
        name:"Hemanth",
        image:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Golconda-fort.jpg",
  
    }]
    return(
        <Userlist user={USER}/>
            )

}
export default User;