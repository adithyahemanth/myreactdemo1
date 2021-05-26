import React from "react";
import {Link} from "react-router-dom";

import Avatar from "../../shared/UIElements/Avatar";

const Landingitems = props =>{
if(props.name){

}
return (
<div className="Landingpage-pics" > 

<Link to={`/${props.id}/places`}>
<h1 className="landing-h1" >Araku valley</h1><br/></Link>
<Avatar image="https://www.pinkvilla.com/files/styles/contentpreview/public/7_places_in_india_to_visit_for_all_the_greenery_you_need_in_life_main_0.jpg?itok=MivVPVlA" alt="Araku valley" className="Araku"/><br/>
<Link to={`/${props.id}/${props.name}/places`}><h1 className="landing-h1">Himachal valley</h1></Link><br/>
<Avatar image="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Valleys-In-Himachal-Pradesh-Cover.jpg" alt="Himachal valley" className="himachal"/><br/>
<Link to={`/${props.id}/places`}><h1 className="landing-h1">Hampi </h1><br/></Link>
<Avatar image="https://www.holidify.com/images/bgImages/HAMPI.jpg" alt="hampi" className="hampi"/>
<Link to={`/${props.id}/places`}><h1 className="landing-h1">Vizag Beach</h1></Link>
<br/>
<Avatar image="https://www.treebo.com/blog/wp-content/uploads/2018/08/Beaches-In-Vizag.jpg" alt="VizagBeach"/><br/>
<iframe src="/landingpage" alt="my page" title="example"></iframe>
</div>
)
}
 export default Landingitems;