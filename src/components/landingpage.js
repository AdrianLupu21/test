import React,{Component} from 'react';
import Main from './main';

class NavBar extends Component{
 state = {
    buttonNames : ["De ce Federatia de sport?","Alumni","Competitii","Cluburi partenere"],
    addresses : ['/','/secondpage','thirdpage']
  };
  render(){
    return(
      <div class = "container">
        <nav id = "nav">
          {this.state.buttonNames.map( (buttons,i)=>{return(<a href = {this.state.addresses[i]}><button class="btn btn-outline-dark" id="straight">{buttons}</button></a>)})}
        </nav>
        <Main />
      </div>
    );
  }
}

class LandingPage extends Component{
  render(){
    return(
      <div>
        <NavBar />
      </div>
    );
  }
}

export default LandingPage;
