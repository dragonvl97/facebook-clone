import React from 'react';
import './Feed.css';
import Post from './Post';
import PostInput from './PostInput';
import StoryReel from './StoryReel';
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostInput />

      <Post
        username="vincent1"
        timestamp="This is timestamp"
        message="TESTING POST 1"
      />
      <Post
        username="vincent2"
        timestamp="This is timestamp"
        message="TESTING POST 2"
      />
      <Post
        username="vincent3"
        timestamp="This is timestamp"
        message="TESTING POST 3"
      />
      {/* TypeStatus */}
    </div>
  );
}

export default Feed;
