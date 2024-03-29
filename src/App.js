
import "./categories.styles.scss"
import Home from "./routes/home/home.component";
import { Routes ,Route} from "react-router-dom";

import Navigation from "./navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";


const App=()=>{
  return (

<Routes>
  <Route path="/" element={<Navigation/>}>
  <Route index element={<Home/>}/>
  <Route path="signIn" element={<SignIn/>}/>
<Route path="/shop" element={<Shop/>}/>
  </Route>
 

</Routes>
    
      );
    
}
  

export default App;
