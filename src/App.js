import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import MainFeed1 from './components/MainFeed1';
import Users from './components/Users';
import Channels from './components/Channels';

import pa from './img/user1.png';
import ag from './img/user2.png';
import rm from './img/user3.png';

class App extends Component{
  state = {
    username: "Paddy",
    userpic: pa,
    chats: [
      {pic: rm, user: "Robert Marsh", text: "Good Luck"},
      {pic: ag, user: "Andy Green", text: "So we can ignore the publishing for now?"},
      {pic: pa, user: "Paddy", text: "Yeah was pretty clear his guidance"},
      {pic: rm, user: "Robert Marsh", text: "Well, it's getting closer!"},
      {pic: rm, user: "Robert Marsh", text: "Another comment"},
  ]
  }

  clickedNew = (newText) => {
    let newPic = this.state.userpic
    let newUsername = this.state.username
    this.setState({
      chats: [...this.state.chats,  {pic: newPic, user: newUsername, text: newText}],
      // newText: ""
    })
}
  
  switchUserRM = () => {
    this.setState({
      username: "Robert Marsh",
      userpic: rm
    })
    console.log("User changed to Rob");
  }
  switchUserAG = () => {
    this.setState({
      username: "Andy Green",
      userpic: ag
    })
    console.log("User changed to Andy");
  }
  switchUserPA = () => {
    this.setState({
      username: "Paddy",
      userpic: pa
    })
    console.log("User changed to Paddy");
  }


  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
        <Toolbar/>
        <div id="mainSection">
          <Users 
            switchRM={this.switchUserRM} switchAG={this.switchUserAG} switchPA={this.switchUserPA}/>
          <Channels/>
          <Switch>
            <Route exact path = "/" render ={() => <MainFeed1 chats={this.state.chats} clickedNew={this.clickedNew} />} />
          </Switch>
        </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;