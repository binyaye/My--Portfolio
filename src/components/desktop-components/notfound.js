import React from 'react';

const Notfound = () =>{
	return(
	<div id='notfound' className='center notfound' style={{margin:'0px', width:"100%", height:"100%", minHeight:'100vh', justifyContent:'center', display:'flex', flex:'center', background:'white', zIndex:'300', paddingTop:'150px'}}>
	<h1>404 error<br></br>The page you're looking for is Not found</h1>
	</div>
	);
}

export default Notfound;