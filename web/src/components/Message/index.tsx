import React from 'react';

// import { Container } from './styles';

interface MessageProps {
    type: 'sended' | 'received',
    content: string
}

const Message: React.FC<MessageProps> = () => {
  return (
    <div className="message">
        
    </div>
  );
}

export default Message;