import video from "../data/video.js";
import VideoHeader from "./VideoHeader";
import InfoBar from "./InfoBar"
import CommentsList from "./CommentsList"
import React from 'react';


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoHeader video = {video}/>
      <InfoBar title = {video.title} createdAt = {video.createdAt} views = {video.views} upvotes = {video.upvotes} downvotes ={video.downvotes}/>
      <CommentsList commentsInfo ={video}/>
    </div>
  );
}

export default App;
