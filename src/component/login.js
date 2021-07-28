import React, { useState, useEffect } from 'react';
import But from "./button"




const Login =()=>{
const [loginlist ,setLoginlist]=useState(['myprofile','orders','wishlist','reward'])


var v="abhsiehk"
const li=loginlist.map((item)=> 
	<li> <a href= {"/"+item}  > {item} </a> </li>

)



return(

<div style ={{ marginLeft:"100px"}} >

<ul> {li} </ul>
</div>



	);
}
export default Login;