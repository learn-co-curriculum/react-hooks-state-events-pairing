import React from "react";
import Comments from "./Comments";

function MainContent({video}) {
  return <div>
    <h2>{video.title}</h2>
    <Comments />
    </div>;

}

export default MainContent;
