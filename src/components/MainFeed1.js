import React, {Component} from 'react';
import ChatBox from './ChatBox';
import './MainFeed.css';
import pa from '../img/user1.png';
import ag from '../img/user2.png';
import rm from '../img/user3.png';
import details from '../img/details.png';
import chatleft from '../img/textbox_left.png';
import chatright from '../img/textbox_right.png';



class MainFeed1 extends Component{
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

    clickedNew = () => {
        this.setState({
          chats: [...this.state.chats,  {pic: this.state.userpic, user: this.state.username, text: this.state.newText}],
          newText: ""
        })
        console.log(this.state.newTask)
      }


      switchUserRM = () => {
          this.setState({
              username: "Robert Marsh",
              userpic: rm
    })
    }
    switchUserAG = () => {
        this.setState({
            username: "Andy Green",
            userpic: ag
  })
  }
  switchUserPA = () => {
    this.setState({
        username: "Paddy",
        userpic: pa
})
}

    updatedMessage = event => {
        this.setState({ newText: event.target.value });
        console.log(this.state.newText)
      };

    render (){
        let allChats = this.state.chats.map((chat, index) => {
            return <ChatBox key = {index} text = {chat.text} user = {chat.user} pic = {chat.pic}/>
        })
        return (
        <div id="mainFeed">
            <div id="chatTop">
                <div id="topLeft">
                    <p id="groupName"><i class="fas fa-lock" ></i> group3 <i class="far fa-star"></i></p>
                    <p id="underTitle"><i class="far fa-user"></i> 4  |  Add a topic</p>
                </div>
                <div id="topRight"><img src={details} alt="details"/></div> 
            </div>
           <div id="chatSection">
           {allChats}
           </div>
           <div id="inputSection">
               <input placeholder="Message group3" id="messageIn" value={this.state.newMessage} onChange={this.updatedMessage}></input>
               <div id="underInput">
                   <div id="uiLeft"><img src={chatleft} alt="text pic"/></div>
                   <div id="uiRight"><img src={chatright} alt="text pic"/></div>
               </div>
               <button onClick={this.clickedNew}>Post Message</button> <button onClick={this.switchUserRM}>Rob</button> <button onClick={this.switchUserAG}>Andy</button> <button onClick={this.switchUserPA}>Paddy</button>
           </div>
        </div>
    );
}
}


export default MainFeed1;