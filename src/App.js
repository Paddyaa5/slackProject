import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import MainFeed1 from './components/MainFeed1';
import WorkSpaces from './components/WorkSpaces';
import Channels from './components/Channels';




class App extends Component{
  state = {
    
  }

  render () {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Toolbar/>
      <div id="mainSection">
      <WorkSpaces/>
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