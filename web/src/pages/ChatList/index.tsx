import React from 'react';
import Chat from '../../components/Chat';

import './styles.css';

const ChatList: React.FC = () => {
  return ( 
      <div id="page-chat">
          <div id="page-chat-content">
              <div className="chat-list">
                <div className="chat-item-list">
                    <p>
                        PROF PROF
                    </p> 
                </div>
                <div className="chat-item-list">
                    <p>
                        PROF PROF
                    </p> 
                </div>
                <div className="chat-item-list">
                    <p>
                        PROF PROF
                    </p> 
                </div>
                <div className="chat-item-list">
                    <p>
                        PROF PROF
                    </p> 
                </div>
              </div>

              <div className="chat-item-box">
                  <Chat />
              </div>
          </div>
      </div>
  );
}

export default ChatList;