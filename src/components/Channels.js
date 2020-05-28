import React from 'react';
import './Channels.css';

const Channels = () =>{
    return (
        <div>
            <div id="Cats">
                <div className="categories">
                    <i class="far fa-comment-dots"></i>
                    <p>Threads</p></div>
                <div className="categories">
                    <i class="fas fa-at"></i>
                    <p>Mentions & reactions</p></div>
                <div className="categories">
                    <i class="far fa-copy"></i>
                    <p>Drafts</p></div>
                <div className="categories">
                    <i class="fab fa-slack-hash"></i>
                    <p>Channel browser</p></div>
                <div className="categories">
                    <i class="fas fa-user-friends"></i>
                    <p>People</p></div>
                <div className="categories">
                    <i class="fas fa-braille"></i>
                    <p>Apps</p></div>
                <div className="categories">
                    <i class="far fa-file"></i>
                    <p>Files</p></div>
                <div className="categories">
                    <i class="fas fa-arrow-up"></i>
                    <p>Show Less</p></div>
            </div>
            <div id="Channels">
                <div className="header">
                    <i class="fas fa-caret-down"></i>
                    <p>Channels</p>
                    <i class="fas fa-plus"></i>
                </div>
                <div className="channels">
                    <i class="fas fa-lock" ></i>
                    <p>group3</p>
                </div>
                <div className="channels">
                    <i class="fab fa-slack-hash"></i>
                    <p>general</p>
                </div>
                <div className="channels">
                    <i class="fab fa-slack-hash"></i>
                    <p>private</p>
                </div>
            </div>
        </div>
    )
}

export default Channels;