import React from "react";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697"
        message="Yo this is the message"
        timestamp="time"
        imgName="imgName"
        unsename="sulabh"
      />
      {/* {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
};

export default Feed;
