import React from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

class App extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  handleMessageInput(e) {
    this.setState(
      {message: e.target.value}
    );
  }

  sendMessage() {
    // io.emit()
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

            className="input"/>
          <button 
            className="send"
            onClick={}>发送</button>
        </div>
      </div>
    )
  }
}

export default App;
