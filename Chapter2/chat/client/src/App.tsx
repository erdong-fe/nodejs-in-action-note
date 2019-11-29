import React from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:9090');

type AppState = {
  message: string
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleMessageInput(e: any) {
    this.setState(
      {message: e.target.value}
    );
  }

  sendMessage() {
    // io.emit()
    socket.emit('chat-message', this.state.message);
    this.setState({message: ''});
  }
  
  render() {

    return (
      <div className="app">
        <div className="messages-list">
        
        </div>
        <div className="message-input">
          <input 
            type="textarea"
            value={this.state.message}
            onChange={this.handleMessageInput}

            className="input"/>
          <button 
            className="send"
            onClick={this.sendMessage}>发送</button>
        </div>
      </div>
    )
  }
}

export default App;
