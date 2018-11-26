import React from 'react';
import {Switch,Route} from 'react-router-dom';
import FirstPage from './firstpage';
import SecondPage from './secondpage';
import ThirdPage from './thirdpage';
import Card from './joinform';

const Main = ()=>(
  <Switch>
    <Route exact path = "/" component = {FirstPage}/>
    <Route exact path = "/secondpage" component = {SecondPage}/>
    <Route exact path = "/thirdpage" component = {ThirdPage}/>
    <Route exact path = "/joinform" component = {Card}/>
  </Switch>
)

export default Main;
