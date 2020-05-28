import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import MainFeed1 from './components/MainFeed1';
import Users from './components/Users';
import Channels from './components/Channels';

class App extends Component{
  
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
        <Toolbar/>
        <div id="mainSection">
        <Users/>
        <Channels/>
        <Switch>
          <Route exact path = "/" render ={() => <MainFeed1 />} />
        </Switch>
        </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;