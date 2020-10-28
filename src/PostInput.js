import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import './PostInput.css';
function PostInput() {
  const [input, setInput] = useState('');
  const [imageUrl, setimageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setInput('');
    setimageUrl('');
  };
  return (
    <div className="postInput">
      <div className="postInput__top">
        <Avatar />
        <form action="">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="post__input"
            placeholder={'Whats on your mind? Write something...'}
          />
          <input
            value={imageUrl}
            onChange={e => setimageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="postInput__bottom">
        <div className="post__option">
          <Videocam style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className="post__option">
          <PhotoLibrary style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="post__option">
          <InsertEmoticon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
