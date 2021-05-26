import React from "react";
import {useParams} from "react-router-dom";
import Placeitem from "../../places/components/Placeitem";


import Landingitems from "./Landingitems";


const Landing = props =>{
    

    return(
     <div>
     
              {props.items.map(places =><Landingitems 
   key={places.id}
   id={places.id}
   name={places.name} />)
              }
   
</div>

    );
}

export default Landing;