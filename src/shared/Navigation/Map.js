import React from 'react';
import GoogleMapReact from 'google-map-react';

import "./Map.css";

const AnyReactComponent = ({ text }) =>   <div  className="marker">
{text}</div>;


class Mapping extends React.Component  
{




  render(){
    return (
<React.Fragment>
    
      <div style={{ height: '35vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={{lat:this.props.lat , lng: this.props.lng}}       defaultZoom={11}
>
          <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text=""></AnyReactComponent>
        </GoogleMapReact>
      
      </div>
      </React.Fragment>
    );
  }
}


export default Mapping;



