import React, { useState } from "react";

function EachComment({comment}) {
  const [count, setCount] = useState(0);

  function handleLikes() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <button id={comment.id} onClick={handleLikes}>
        {count}
      </button>
    </div>
  );
}

export default EachComment;
