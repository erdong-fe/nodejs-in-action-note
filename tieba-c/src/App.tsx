import React from 'react';
import './App.scss';
import PostCard from './components/PostCard';
import { createPost, getPostList } from 'src/api/post';
import post from 'src/types/post';
import Sidebar from 'src/components/Sidebar';
import NewPost from 'src/components/NewPost';
import Topbar from 'src/components/Topbar';
interface AppState {
  postList: post.toShow[]
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      postList:[],
    }
    this._getPostList();
  }

  async _getPostList() {
    try {
      const { data } = await getPostList();
      this.setState({
        postList: data
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const postList = this.state.postList;
    const postListToShow = postList.map(post => {
      return (
        <div className="post-card-wrapper" key={post.id}>
          <PostCard {...post} />
        </div>
      )
    })
    return (
      <div className="app">
        <div className="topbar-wrapper">
          <Topbar />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="sidebar-wrapper">
              <Sidebar/>
            </div>
            <div className="main">
              <div className="main-feeds">
                <div className="post-card-wrapper">
                  <NewPost />
                </div>
                {postListToShow}
              </div>
              <div className="main-right">
                right
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
