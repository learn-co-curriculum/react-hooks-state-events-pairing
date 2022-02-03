import React, { useState } from "react";
import Comments from "./Comments";

function MainContent({ video }) {
  const [likes, setLikes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [isHideComments, setIsHideComments] = useState(false);

  function handleUpvote() {
    setLikes((likes) => likes + 1);
  }
  function handleDownvote() {
    setDownvotes((downvotes) => downvotes - 1);
  }
  function handleComments() {
    setIsHideComments(!isHideComments);
  }
  return (
    <div>
      <h2>{video.title}</h2>
      <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
      <button onClick={handleUpvote}>{`${likes}👍`}</button>
      <button onClick={handleDownvote}>{`${downvotes}👎`}</button>

      <div>
        <button onClick={handleComments}>
          {isHideComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      <hr></hr>
      {isHideComments ? <Comments video={video} />: null}
    </div>
  );
}

export default MainContent;
