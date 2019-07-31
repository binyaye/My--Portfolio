import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import ProgressBar from './ProgressBarMob';

class SkillsMob extends Component {
  constructor(){
    super()
    this.state = {
      percentage: '',
      html5: '68',
      css3: '48',
      bootStrap: '25',
      javaScript: '47',
      jquery: '23',
      react: '34',
      node: '21',
      java: '30',
      dart: '19'
    }
  }
  render (){
    const { html5, css3, bootStrap, javaScript, jquery, react, node, java, dart } = this.state;
    return(
      <MDBCard style={{ width: "100%", background: "white", margin:"5px", height:'auto'}}>
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'20px', color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Skills</MDBCardTitle>
        <MDBCardText>
            <table style={{width:"75%"}}>
              <tbody>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>HTML5</td>
              <td><ProgressBar className='br3' percentage={html5} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>CSS3</td>
              <td><ProgressBar className='br3' percentage={css3} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>Bootstrap</td>
              <td><ProgressBar className='br3' percentage={bootStrap} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>JavaScript</td>
              <td><ProgressBar className='br3' percentage={javaScript} /></td>
              </tr>
              <tr>

                <td style={{fontSize:'12px', color:'#263238'}}>jQuery</td>
              <td><ProgressBar className='br3' percentage={jquery} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>React.js</td>
              <td><ProgressBar className='br3' percentage={react} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>Node.js</td>
              <td><ProgressBar className='br3' percentage={node} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>Java</td>
              <td><ProgressBar className='br3' percentage={java} /></td>
              </tr>
              <tr>
                <td style={{fontSize:'12px', color:'#263238'}}>Dart</td>
              <td><ProgressBar className='br3' percentage={dart} /></td>
              </tr>
              </tbody>
            </table>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default SkillsMob;
