import React from 'react';

interface Post {
  content: string,
  // author: object,
  createdAt: string
}
const PostCard:React.FC<Post> = (props: Post) => {
  return (
    <div className="post-card">
      <div className="post-data">
        {props.createdAt}
      </div>
      <div className="post-content">
        {props.content}
      </div>
    </div>
  ) 
}

export default PostCard;