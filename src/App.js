import React, { Component } from 'react';
import Navigation from './components/desktop-components/Navigation/Navigation';
import Footer from './components/desktop-components/Footer/Footer';
import MobVersion from './AppMob';
import './App.css';


const initialState = {
	width: window.innerWidth,
}

class App extends Component {

	constructor() {
	  super();
	  this.state = initialState;
	}


	componentWillMount() {
	  window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
	  this.setState({ width: window.innerWidth });
	};

	render() {
	  const { width } = this.state;
	  const isMobile = width <= 500;
	  if (isMobile) {
	    return (
	      <div>
			<MobVersion />
		  </div>
	    );
	  } else {
	    return (
			<div className="App">
			  <Navigation />			 
			  <Footer />
			</div>
	    );
	  }
	}
}

export default App;
