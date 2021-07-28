

import React, { useState, useEffect } from 'react';
import Login from './component/login'
import Buttonhover from './component/button'
import Searchbar from './component/search'
import Order from './component/order'

const App = () => {
  const [message, setMessage] = useState(0);
    const [count, setCount] = useState(0);
    const [showlogin, setShowlogin]=useState(0);
    const [searchvalue, setSearchvalue]=useState('');

  
function check(){
  alert("working")
}

  return (
<div>

    <div className ="header"  style= {{ display: "flex",
  flexDirection: "row" ,backgroundColor:"#f2ecda",height:"50px"}}  >


  <Searchbar searchValue={searchvalue}  action ={setSearchvalue}   />
       <Order/>
    <div  style ={{marginLeft:"600px",height:"300px"}} className ="hoverbutton"   onMouseEnter={()=>{setShowlogin(1)}}   


    onMouseLeave={()=>{setShowlogin(0)}}  >
    <Buttonhover style={{backgroundColor:"black"}}   
     action ={setShowlogin} />
     {showlogin? <Login/>:null   }
    </div>
    </div>  

   
 <div  className="hoverbutton"  style ={{position:"absolute" , right:"260px",top:"30px",backgroundColor:"red"}}>
          
    </div>


    </div>
  );
};

export default App;
