import React from 'react';
import './App.css';

const socket = new WebSocket('ws://127.0.0.1:3000');

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Client
      </header>
    </div>
  );
}

export default App;
