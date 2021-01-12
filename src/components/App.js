import video from "../data/video.js";
import React, { useState } from 'react'
import CommentList from './CommentList'

function App() {
  console.log("Here's your data:", video);
  const [voteUp, setVoteUp] = useState(video.upvotes)
  const [voteDown, setVoteDown] = useState(video.downvotes)

  function handleVote(e) {
    if (e.target.name === '+') {
      setVoteUp(voteUp + 1)
    } else {
      setVoteDown(voteDown + 1)
    }
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1 alt={video.title}>{video.title}</h1>
      <p>{video.views} Views | {video.createdAt}</p>
      <button onClick={handleVote} name='+'>{voteUp} 👍</button>
      <button onClick={handleVote} name='-'>{voteDown} 👎</button>
      <hr></hr>
      <CommentList />
    </div>
  );
}

export default App;
