import React , {useState} from "react";
import {Link} from "react-router-dom";

import NavLinks from "./NavLinks"
import Mainheader from "./Mainheader"
import SideDrawer from "../UIElements/SideDrawer"

import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";
const MainNavigation = props =>{

    const [showslider , setshowslider]=useState(false);

    const onpresshandler = () =>{
        setshowslider(true);
    console.log(showslider)
    }

const closehandler = () =>{
    setshowslider(false);
    console.log(showslider)
}
    return(
   <React.Fragment>
    {showslider && <Backdrop onClick={closehandler} />}
     <SideDrawer show={showslider} onClick={closehandler}>
                <NavLinks />
            </SideDrawer>
 <Mainheader>
          <button className="navigation-button" onClick={onpresshandler}>
                <span/>
                <span/>
                <span/>
                <span/>  
    </button>     
      <h1 className="navigation-header">
                <Link  to='/'>YourPlaces</Link>
                </h1>
                <nav className="navigation-nav">
<NavLinks />
</nav>

        </Mainheader> 
        </React.Fragment>
    );



}
export default MainNavigation;