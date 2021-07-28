import React, { useState, useEffect } from 'react';

const Search=({action,searchValue})=>{

const fun =()=>{
	alert("he;o");
}

return(
 <div>      

<input  
value={searchValue}
onChange={(e)=>action(e.target.value)} /> 



	</div> );

}

export default Search;