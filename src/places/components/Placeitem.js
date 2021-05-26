import React,{useState} from "react";


import Modal from "../../shared/FormElements/Modal";
import Button from "../../shared/UIElements/Button";
import Card from "../../shared/UIElements/Card";
import Mapping from "../../shared/Navigation/Map";


import "./Placeitem.css";

const Placeitem = props => {
    const [showmodal,Setshowmodal]=useState(false);
    
    const onopenhandler = () =>
    {
        Setshowmodal(true);
    }

    const onclosehandler = () => {
        Setshowmodal(false);
    }



return (
<React.Fragment>

    <Modal show={showmodal} 
    header={props.address}
     onCancel={onclosehandler}
     footer={<Button onClick={onclosehandler}>CLOSE</Button>}
     >
<div><Mapping 
    lat={props.coordinates.lat}
    lng={props.coordinates.lng}
    
       />

  
</div>
     </Modal>
     
    <div className="placeitem-div">
        <Card>
            
        <div className="Placeitem-image">


<img src={props.image} alt={props.title}/></div>
    <div className="placeitem-info">
<h1 classname="placeitem-title">{props.title}</h1>
<p classname="placeitem-description">{props.description}</p>
<p classname="placeitem-address">{props.address}</p>
<p classname="placeitem-creator">{props.creator}</p>

    
    </div>        
<div className="placeitem-buttons">
<Button inverse onClick={onopenhandler}>
    VIEW MAP!
    </Button>
     
<Button to={`/places/${props.id}`}>
    EDIT
</Button>
     
<Button danger>
    DELETE
</Button>
</div>
        </Card>
    </div>
</React.Fragment>

    );
}
export default Placeitem;