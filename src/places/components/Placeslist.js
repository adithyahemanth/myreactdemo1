import React from "react";

import Placeitem from "./Placeitem"
import Card from "../../shared/UIElements/Card";

import "./Placelist.css";
import Button from "../../shared/UIElements/Button";

const Placelist = props => {
    
    
      
    if(props.items.length === 0)
 {
    return(
        <React.Fragment className="Placelist">
    <div className="placelist-no-user">
    <Card>
     <div className="placelist-no-user">
     
<h1>No PLaces FOUND!!!</h1>

<Button to="/places/new">ADD PLACES</Button>
</div>
</Card>
</div>
</React.Fragment>
);}

return(
<React.Fragment>
 <div>
    
<div className={`placelist-div-2 ${props.items.id}`}>
{ props.items.map(place =>

<div>
    
        
       
<Placeitem
key={place.id}
     
id={place.id}
     
image={place.imageUrl}
   
title={place.title}   

description={place.description}
  
address={place.address}
     
creatorId={place.creator}
 
coordinates={place.location}
   />
   </div>
)}
</div>
</div>
</React.Fragment>
    );

}
 export default Placelist;