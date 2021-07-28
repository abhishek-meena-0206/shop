import React, { useState, useEffect } from 'react';


const Button =({action,excecution})=>{


function Hover(e){

alert(e.target.getAttribute("buttonhover"))

}	


return (


<div>  


  <button  >  click here</button>

 </div>



	);



}

export default Button;