import React from 'react';
import {Switch,Route} from 'react-router-dom';
import FirstPage from './firstpage';
import SecondPage from './secondpage';
import ThirdPage from './thirdpage';

const Main = ()=>(
  <Switch>
    <Route exact path = "/" component = {FirstPage}/>
    <Route exact path = "/secondpage" component = {SecondPage}/>
    <Route exact path = "/thirdpage" component = {ThirdPage}/>    
  </Switch>
)

export default Main;
