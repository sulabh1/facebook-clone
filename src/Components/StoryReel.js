import React from "react";
//import AddIcon from "@material-ui/icons/Add";
import Story from "./Story";

import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* story name//title img, profilepic */}

      <Story
        image="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697"
        title="Add to Story"
      />

      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg"
        profileSrc="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697"
        title="Sulabh adhikari"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg"
        profileSrc="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697"
        title="Sulabh adhikari"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg"
        profileSrc="https://www.facebook.com/photo?fbid=3978670518849802&set=a.123508621032697"
        title="Sulabh adhikari"
      />
    </div>
  );
};

export default StoryReel;
