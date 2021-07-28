
import Order from '../screen/orders'
import Profile from '../screen/myprofile'
import App from '../App';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
function Rout(){


return(
     <div>

   <Router>
    <Switch>
    <Route exact path='/' ><App/>  </Route>
    <Route  path='/orders'> <Order/>  </Route>
    <Route  path='/profile'> <Profile/>  </Route>
    </Switch>
    </Router>

     </div>

	)

}

export default Rout;
