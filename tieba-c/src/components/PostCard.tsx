import React from 'react';
import './PostCard.scss';
interface Post {
  content: string,
  // author: object,
  createdAt: string
}
const PostCard:React.FC<Post> = (props: Post) => {
  return (
    <div className="post-card card-panel">
      <div className="post-data">
        <div className="avatar-wrapper">
        </div>
        <div className="detail">
          <div className="name-wrapper">
            <span className="name">
              江宁公安在线
            </span>
          </div>
          <div className="created-at">
            {props.createdAt}
          </div>
          <div className="post-content">
            {props.content}
          </div>
        </div>
      </div>
      <div className="post-operate">
        <span className="operate-item">
          收藏
        </span>
        <span className="operate-item">
          转发
        </span>
        <span className="operate-item">
          评论
        </span>
        <span className="operate-item">
          点赞
        </span>
      </div>
    </div>
  ) 
}

export default PostCard;