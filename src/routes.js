import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import BootNav from './components/BootNav';
import Item from './components/Item';
import Home from './components/Home';


const Routes = (
  <Router>
    <BootNav />
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path='/item' component={Item}/>
    </div>
  </Router>
);

export default Routes;
