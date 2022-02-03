import video from "../data/video";
import Comment from "./Comment";

function Main() {
  
  
    return (
    <div>
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button>{video.upvotes} 👍</button>
      <button>{video.downvotes} 👎</button>
      <br></br>
      <br></br>
      <Comment />
    </div>
  );
}

export default Main;
