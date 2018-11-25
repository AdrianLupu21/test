import React, { Component } from 'react';
import './App.css';
import Main from './components/main';

 /*const NavBar = (props) =>{
   return(
     <button id="nav">{props.name}</button>
   );*/

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar name="art" />*/}
        <ul>
          <li><a href="/">FirstPage</a></li>
          <li><a href="/secondpage">SecondPage</a></li>
          <li><a href="/thirdpage">ThirdPage</a></li>
        </ul>
        <Main />
      </div>
    );

  }
}

export default App;
