
import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/UIElements/Avatar";
import Card from "../../shared/UIElements/Card";

import "./Useritem.css";

const Useritem = props => {
    return(
        <div className="user-item">
    
    <Card className="user-item-content">
    <Link to={`/${props.id}/places`}>
    <div className="imageitem">
    <Avatar image={props.image} alt='images' ></Avatar>
</div>
   
    <div className="user-item__info">
    <h3>    
{props.id}        
    </h3>
<h2>{props.name}</h2>
</div>
<div className="imageitem">
    
</div>
</Link>
</Card>

</div>

    
    )
}
export default Useritem;