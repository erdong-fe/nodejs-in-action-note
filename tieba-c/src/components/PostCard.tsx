import React from 'react';
import { formatTimeFrom } from 'src/utils/time';
import './PostCard.scss';
interface Post {
  content: string,
  // author: object,
  createdAt: number
}
const PostCard:React.FC<Post> = (props: Post) => {
  const oneHour = 3600000;
  console.log(props.createdAt);
  
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
            {formatTimeFrom(props.createdAt, oneHour)}
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