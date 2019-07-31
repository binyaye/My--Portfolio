import React, { Component } from 'react';
import Navigation from './components/mobile-components/Navigation-Mob/NavigationMob';
import Footer from './components/mobile-components/Footer-Mob/FooterMob';
import './App.css';

class AppMob extends Component {
	render() {
  	return (
  		<div className="App">
  			<Navigation />
			<Footer />
  		</div>
  	    );
	}
}

export default AppMob;
