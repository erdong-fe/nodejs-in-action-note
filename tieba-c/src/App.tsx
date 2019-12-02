import React from 'react';
import './App.css';
import PostCard from './components/PostCard';

const post = {
  content: '你好',
  createdAt: '2019-12-01'
}

const App: React.FC = () => {
  return (
    <div className="app">
      <PostCard {...post} />
    </div>
  );
}

export default App;
