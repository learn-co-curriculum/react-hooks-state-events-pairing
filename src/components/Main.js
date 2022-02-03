import video from "/home/dbencze/react-hooks-state-events-pairing/src/data/video.js";

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
      <button>Hide Comments</button>
      <h2>2 Comments</h2>
      <h3>{video.comments[0].user}</h3>
      <p>{video.comments[0].comment}</p>
      <h3>{video.comments[1].user}</h3>
      <p>{video.comments[1].comment}</p>
    </div>
  );
}

export default Main;
