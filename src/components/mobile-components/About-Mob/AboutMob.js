import React, { Component } from 'react';
import './AboutMob.css';
import { MDBCol } from 'mdbreact';
import Profile from './ProfileMob';
import Skills from './SkillsMob';
import Experience from './ExperienceMob';
import Education from './EducationMob';


class AboutMob extends Component{

  _isMounted = false;
  constructor(props){
    super(props)
    this.state = {
      percentage: '',
      html5: props.html5,
      css3: props.css3,
      bootStrap: props.bootStrap,
      javaScript: props.javaScript,
      jquery: props.jquery,
      react:  props.react,
      node: props.node,
      java: props.java,
      dart: props.dart
    }
  }

  componentDidMount() {
 
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
    render(){
      const { html5, css3, bootStrap, javaScript, jquery, react, node, java, dart } = this.state;
      return(
        <div className='fullScreen'>
        <MDBCol className='br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5' style={{width: 'auto', display: 'flex',  flexWrap: "wrap", justifyContent: "center", height:'auto'} }>
          <Profile />
          <Skills html5 ={html5}
              css3 = {css3} bootStrap ={bootStrap} javaScript={javaScript}
              jquery={jquery} react={react} node={node}
              java={java} dart={dart} />
          <Education />
          <Experience />
        </MDBCol>
      </div>
      );
  }
}

export default AboutMob;
