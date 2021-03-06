import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
  onMessage = message => {
    this.props.onMessage(this.props.user.username, message)
  }
  
  render() {
    const { user, messages } = this.props;
    
    return(
      <div className="chat-window">
      	<h2>Super Awesome Chat</h2>
      	<div className="name sender">{user.username}</div>
      	<MessageHistory user={user} messages={messages} />
		<AddMessage onMessage={this.onMessage} />
      </div>
    )
  }
}

ChatWindow.PropTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  onMessage: PropTypes.func.isRequired
}

export default ChatWindow
