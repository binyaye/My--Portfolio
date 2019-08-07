import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from '../About-Mob/AboutMob';
import Contact from '../Contact-Mob/ContactMob';
import Projects from '../Projects-Mob/ProjectsMob';
import Home from '../Home-Mob/HomeMob';
import classnames from "classnames";
import './NavigationMob.css';

class NavigationMob extends Component {

  _isMounted = false; 
 constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this._isMounted = true;
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this._isMounted = false;
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  onNavigationItemClicked = (event) =>{
    document.getElementById("home").style.color = "white";
    document.getElementById('about').style.color = "white";
    document.getElementById("contact").style.color = "white";
    document.getElementById("projects").style.color = "white";
    document.getElementById(event.target.id).style.backgroundColor = "#263238";
    document.getElementById(event.target.id).style.color = "black";
  }

  render(){

    return (
      <div className="nav-style">
       <Router>
        <div className='wrapper'>
          <header className='center' style={{display:'flex', flex:'center', marginTop:'0px', margin:'0px', background:'#263238'}}>
            <ul className={classnames('border', {
          "navbar--hidden": !this.state.visible
        })} style={{listStyleType:'none', position:'fixed', minWidth:"100%", height:'auto', zIndex:'100', marginTop:'0px', paddingBottom:'15px', paddingTop:'15px', paddingLeft:'30px', background:'#263238'}}>
              <li><Link to="/" onClick={this.onNavigationItemClicked} id="home" style={{color:"black", fontSize:'3.5vh', fontWeight:'bold'}}>Home</Link></li>
              <li><Link to="/about" onClick={this.onNavigationItemClicked} id="about" style={{color:"white", fontSize:'3.5vh', fontWeight:'bold'}}>About</Link></li>
              <li><Link to="/projects" onClick={this.onNavigationItemClicked} id="projects" style={{color:"white", fontSize:'3.5vh', fontWeight:'bold'}}>Projects</Link></li>
              <li><Link to="/contact" onClick={this.onNavigationItemClicked} id="contact" style={{color:"white", fontSize:'3.5vh', fontWeight:'bold'}}>Contact</Link></li>
            </ul>  
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </header>
        </div>
      </Router>
    </div>
    );
  }
}

export default NavigationMob;
