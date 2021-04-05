import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
