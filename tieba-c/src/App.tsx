import React from 'react';
import './App.css';
import PostCard from './components/PostCard';
import { createPost, getPostList } from 'api/post';

class App extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      postList:[],
    }
  }

  render() {
    return (
      <div className="app">
        app
      </div>
    )
  }
}

// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <PostCard {...post} />
//     </div>
//   );
// }

export default App;
