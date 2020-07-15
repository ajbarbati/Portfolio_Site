import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../Main/Home.js'
import ProjectList from '../Main/ProjectList.js'
import About from '../Main/About.js'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={ProjectList} />      
      <Route path="/about" component={About} />      
    </Switch>
  );
}

 