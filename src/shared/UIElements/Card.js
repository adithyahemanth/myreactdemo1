import React from 'react';


import './Card.css';


const Card = props => {
 
 return (
<center>
    <div className={`card ${props.className}`}
 style={props.style}>

      {props.children}
   
 </div>
</center>
  );

};


export default Card;
