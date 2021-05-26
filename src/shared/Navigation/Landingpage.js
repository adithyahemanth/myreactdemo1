import React from "react";

//import {useParams} from "react-router-dom";
//import Placelist from "../../places/components/Placeslist";

import Landing from "../../user/components/Landing";
//import Avatar from "../UIElements/Avatar";

import "./Landingpage.css";

const Landingpage = props => {
    const Landingpics =[
        {
        id:'u1',
        name:'Himachal valley',
        image:"https://www.pinkvilla.com/files/styles/contentpreview/public/7_places_in_india_to_visit_for_all_the_greenery_you_need_in_life_main_0.jpg?itok=MivVPVlA",
    
    },
    {
        id:'u1',
        name:'Araku valley',
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Valleys-In-Himachal-Pradesh-Cover.jpg",

    
    },
    {
        id:'u1',
        name:'Hampi',
        image:"https://www.holidify.com/images/bgImages/HAMPI.jpg",

    
    },
    {
        id:'u1',
        name:'Vizag Beaches',
        image:"https://www.treebo.com/blog/wp-content/uploads/2018/08/Beaches-In-Vizag.jpg",

    
    }

]
    
return(
     
     
//<Landing/>


<Landing 
key= {Landingpics.id}
items={Landingpics}
/>


    );

}
export  default Landingpage;