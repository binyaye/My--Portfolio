import React, { Component } from 'react';
import './Navigation.css';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import classnames from "classnames";

class Navigation extends Component{
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
    document.getElementById("projects").style.color = "white";
    document.getElementById("about").style.color = "white";
    document.getElementById("contact").style.color = "white";
    document.getElementById(event.target.id).style.color = "black";
    
  }

  render(){
    return(
      <div className="nav-style">
       <Router>
        <div className='wrapper' >          
          <header className='center' style={{justifyContent:"center", display:'flex', flex:'center'}}>
            <nav className={classnames('border', {
          "navbar--hidden": !this.state.visible
        })} style = {{zIndex:'100', display: 'flex', flex:'center', justifyContent: 'center', backgroundColor:'#263238'}}>
              <p><Link to="/" onClick={this.onNavigationItemClicked} id="home" className='underline-hover h1-responsive link dim pa3 pointer grow' style={{color:"black"}}>Home</Link></p>
              <p><Link to="/about" onClick={this.onNavigationItemClicked} id="about" className='underline-hover h1-responsive link dim pa3 pointer grow' style={{color:"#ffffff"}}>About</Link></p>
              <p><Link to="/projects" onClick={this.onNavigationItemClicked} id="projects" className='underline-hover h1-responsive link dim pa3 pointer grow' style={{color:"#ffffff"}}>Projects</Link></p>
              <p><Link to="/contact" onClick={this.onNavigationItemClicked} id="contact" className='underline-hover h1-responsive link dim pa3 pointer grow' style={{color:"#ffffff"}}>Contact</Link></p>
           
            </nav>
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

export default Navigation;
