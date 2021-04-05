import { Avatar, Input } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { React, useState } from "react";
import "./MessageSender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.file[0]) {
      setImage(e.target.file[0]);
    }
  };
  const handleSubmit = (e) => {
    //store into the database
    console.log("submitted");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697" />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={input}
            inChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            onChange={handleChange}
            className="messageSender__fileSelector"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
