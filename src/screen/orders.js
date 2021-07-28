import React, { useState, useEffect } from 'react';


const Orders=()=>{

const[order,setOrder]=useState([]);
const li=order.map((item)=> 
<li> {item} </li>

)
return(


<h1>orders list</h1>


	)


}

export default Orders;