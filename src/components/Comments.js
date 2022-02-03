import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import EachComment from './eachComment';


function Comments({video}) {
  
const commentDiv = video.comments.map((comment) => {
  return <EachComment comment={comment}/>
})
  return <div>
    <h3>2 Comments</h3>
    {commentDiv}
    </div>;
}

export default Comments;
