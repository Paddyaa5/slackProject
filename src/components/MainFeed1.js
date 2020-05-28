import React, {Component} from 'react';
import ChatBox from './ChatBox';

import './MainFeed.css';
import pa from '../img/user1.png';
import ag from '../img/user2.png';
import rm from '../img/user3.png';


class MainFeed1 extends Component{
    state = {
        chats: [
            {pic: rm, user: "Robert Marsh", text: "Good Luck"},
            {pic: ag, user: "Andy Green", text: "So we can ignore the publishing for now?"},
            {pic: pa, user: "Paddy", text: "Yeah was pretty clear his guidance"},
            {pic: rm, user: "Robert Marsh", text: "Well, it's getting closer!"},
            {pic: rm, user: "Robert Marsh", text: "Another comment"},
        ]
    }
    render (){
        let AllChats = this.state.chats.map((chat, index) => {
            return <ChatBox key = {index} text = {chat.text} user = {chat.user} pic = {chat.pic}/>
        })
        return (
        <div id="mainFeed">
            <div id="chatTop">
                <div id="topLeft"><p>#Private</p><p id="">25 3 Add a topic</p></div>
                <div id="topRight"><img src='../img/information.png' alt="info"/> Details</div> 
            </div>
           <div id="chatSection">
           {AllChats}
           </div>
           <div id="inputSection">
               <input placeholder="Message group3" id="messageIn" autofocus></input>
               <div id="underInput"></div>
           </div>
        </div>
    );
}
}


export default MainFeed1