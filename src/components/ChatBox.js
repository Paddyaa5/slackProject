import React from 'react';
import './ChatBox.css';

const ChatBox = (props) => {
    return (
        <div>
            <div id="chatBox">
                <div id="left">
                    <img id="pic" src={props.pic} alt="user pic"/>
                </div>
                <div id="right">
                    <p id="name">{props.user}<span id="time"> 4:45 pm</span></p>
                    <p id="text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}
export default ChatBox