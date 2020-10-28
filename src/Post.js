import { Avatar } from '@material-ui/core';
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post({ profPic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profPic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>TimeStamp...</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post_option">
          <ThumbUp />
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
        </div>
        <div className="post_option">
          <NearMe />
        </div>
        <div className="post_option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
