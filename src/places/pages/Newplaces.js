import React from "react";

import Button from "../../shared/UIElements/Button";
import Input from "../../shared/FormElements/Input";

import "./Newplaces.css";

const Newplaces = props => {
    return (
<div className="place-form">
        <Input 
        elements="input"
        type="text"
        label="Title"
        />
<Input 
        elements="input"
        type="text"
        label="Title"
        />
        <Input 
        elements="input"
        type="text"
        label="Title"
        />
        <Input 
        elements="textarea"
        type="text"
        label="Title"
        />
        <Button to="/places">Add Me</Button>

</div>
    );
    }

export  default Newplaces;