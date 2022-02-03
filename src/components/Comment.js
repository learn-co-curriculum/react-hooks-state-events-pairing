import { useState } from "react";
import CommentListItems from "./CommentListItems";

function Comment() {
  const [hideButton, setHideButton] = useState(true);

  function handleHideComments() {
    setHideButton((hideButton) => !hideButton);
    console.log("test");
  }

  return (
    <div>
      <button onClick={handleHideComments}>
        {hideButton ? "Hide Comments" : "Show Comments"}
      </button>
      {hideButton ? <h3>2 Comments</h3> : null}
      {hideButton ? <CommentListItems /> : null}
    </div>
  );
}

export default Comment;
