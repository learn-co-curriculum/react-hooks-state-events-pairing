import video from "../data/video";
import Comment from "./Comment";
import { useState } from "react";

function Main() {
  const [addUpvotes, setUpvotes] = useState(video.upvotes);
  const [addDownvotes, setDownvotes] = useState(video.downvotes);

  function handleUpvote() {
    console.log("upvoted!");
    setUpvotes((addUpvotes) => addUpvotes + 1);
  }

  function handleDownvote() {
    console.log("downvoted!");
    setDownvotes((addDownvotes) => addDownvotes + 1);
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={handleUpvote}>{addUpvotes} 👍</button>
      <button onClick={handleDownvote}>{addDownvotes} 👎</button>
      <br></br>
      <br></br>
      <Comment />
    </div>
  );
}

export default Main;
