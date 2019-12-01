import React from 'react';

interface post {
  content: string,
  // author: object,
  createAt: string
}
const PostCard:React.FC = (post) => {
  return (
    <div className="post-card">
      <div className="post-data">
        {post.createAt}
      </div>
      <div className="post-content">
        {post.content}
      </div>
    </div>
  )
}

export default PostCard;