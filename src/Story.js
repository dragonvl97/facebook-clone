import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";
function Story({ image, prof, title }) {
  return (
    <div className="story">
      <Avatar className="story__avatar" src={prof} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
