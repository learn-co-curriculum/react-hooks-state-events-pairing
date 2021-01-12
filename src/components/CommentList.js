import React, { useState }  from 'react'
import video from "../data/video.js";
import Comment from './Comment'

function CommentList() {

    const [commentSearch, setCommentSearch] = useState("")
    const [sortAlpha, setSortAlpha] = useState(true)

    // const commentsArray = video.comments.map((commentObj) => {
    //     return <Comment key={commentObj.id} user={commentObj.user} comment={commentObj.comment} />)
    // })

    const filteredComments = video.comments.filter(commentObj => {
        return commentObj.comment.toLowerCase().includes(commentSearch.toLowerCase())
    })
    
    let sortedComments = []

    if (sortAlpha) {
        sortedComments = filteredComments.sort((a,b) => ((a.comment < b.comment) ? 1 : -1))
        console.log(sortedComments)
    } else {
        sortedComments = filteredComments.sort((a,b) => ((a.comment > b.comment) ? 1 : -1))
        console.log(sortedComments)
    }
    

    const commentItems = sortedComments.map(commentObj => {
        return <Comment key={commentObj.id} user={commentObj.user} comment={commentObj.comment} />
    })

    return (
        <div className="CommentList">
            <h4>{commentItems.length} Comments</h4>
            <input onChange={(e) => {setCommentSearch(e.target.value)}} type="text" placeholder="Search..."></input>
            <button onClick={(e) => setSortAlpha(!sortAlpha)}>Sort</button>
            {commentItems}
        </div>
    );
}

export default CommentList;
