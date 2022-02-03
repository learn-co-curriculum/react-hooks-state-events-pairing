import { useState } from "react"
import video from "../data/video"

function Comment() {
    
    const [hideButton, setHideButton] = useState (true)
   
    function handleHideComments() {
    setHideButton((hideButton) => ! hideButton)
        console.log('test')
    }

  return (
        <div>
        <button onClick={handleHideComments}>{hideButton ? "Hide Comments" : "Show Comments"}</button>
      <h2>2 Comments</h2>
      <h3>{video.comments[0].user}</h3>
      <p>{video.comments[0].comment}</p>
      <h3>{video.comments[1].user}</h3>
      <p>{video.comments[1].comment}</p>
        </div>
)

}


export default Comment