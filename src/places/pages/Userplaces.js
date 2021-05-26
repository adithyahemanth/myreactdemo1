import React from  "react";
import {useParams} from "react-router-dom"

import Placelist from "../components/Placeslist"
const Userplaces = props => {
    const Dummyplaces=[

      {        
        id: 'p1',

        title: 'TajMahal',
     
       description: 'One of the Worlds seven wonders ',
    
        imageUrl:
          'https://media.gettyimages.com/photos/taj-mahal-sunrise-picture-id539269887?s=612x612',
           
        address: 'Agra , India',
    
        location: {
          lat: 27.1751,
          lng: 78.0421
        },
    
        creator: 'u1'
    
      },
    
      {
        id: 'p2',
    
        title: 'Empire State Building',
    
        description: 'One of the most famous sky scrapers in the world!',
    
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
     
       address: '20 W 34th St, New York, NY 10001',
    
        location: {
          lat: 27.1751,
          lng: 50.0421        },
    
        creator: 'u2'
    
      }
    ]
    const UserId = useParams().UserId ;

    const loadedpalces = Dummyplaces.filter(places => places.creator === UserId);
    return(
            <Placelist items={loadedpalces}/>
    );

}
export default Userplaces;