import './App.css';
import {BrowserRouter as Router,Route }  from "react-router-dom";

import Userplaces from "./places/pages/Userplaces";
import User from "./user/pages/User";
import Newplaces from "./places/pages/Newplaces";
import MainNavigation from './shared/Navigation/MainNavigation';
import Landingpage from "./shared/Navigation/Landingpage";

const App = ( ) =>{
  return (
    <Router>
      <main>
      <MainNavigation/>
<Route path="/user" exact>
<User/>
</Route>
<Route path="/:UserId/places"><Userplaces /></Route>
<Route path="/"exact><Landingpage /></Route>
<Route path="/places/new"><Newplaces /></Route>
<Route path="/Addplaces" exact><Newplaces /></Route>
</main>
</Router>
  );
}

export default App;
