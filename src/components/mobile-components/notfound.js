import React from 'react';

class Notfound extends React.Component {

   	render(){
   		
		return(
			<div id='notfound' className='notfound' style={{margin:'0px', width:"100%", height:"100%", minHeight:'100vh', justifyContent:'center', display:'flex', flex:'center', background:'white', paddingTop:'200px'}}>
			<h1 className='center'style={{justifyContent:'center', display:'flex', flex:'center'}}>404 error<br></br>The page you're looking for is Not found</h1>
			</div>
		);
	}
}

export default Notfound;