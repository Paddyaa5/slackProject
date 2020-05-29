import React from 'react';
import './Users.css';
// import ChatBox from './ChatBox';
import MainFeed1 from './MainFeed1';

import pa from '../img/user1.png';
import ag from '../img/user2.png';
import rm from '../img/user3.png';


const Users = () => {
  return(
    <div className="Users" id="Users">
      <div>
        <img src={pa} alt="Paddy" width="100px" onClick={MainFeed1.switchUserPA} />
      </div>
      <div>
        <img src={ag} alt="Andy Green" width="100px" onClick={MainFeed1.switchUserAG} />
      </div>
      <div>
        <img src={rm} alt="Robert Marsh" width="100px" onClick={MainFeed1.switchUserRM} />
      </div>
    </div>
    )
  }

export default Users;
