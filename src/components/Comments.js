import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';

function Comments({video}) {
  const [count, setCount] = useState(0)

  function handleLikes() {
    setCount((count) => count +1)
  }
const commentDiv = video.comments.map((comment) => {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <button id={comment.id}onClick={handleLikes}>{count}</button>
    </div>
  )
})
  return <div>
    <h3>2 Comments</h3>
    {commentDiv}
    </div>;
}

export default Comments;
