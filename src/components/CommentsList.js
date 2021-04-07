import Comment from "./Comment"

function CommentsList({commentsInfo}){
    
    const commentList = commentsInfo.comments.map((comment) => {
        return (
            <Comment
            key={comment.id}
            user={comment.user}
            comment= {comment.comment}
            />
        )
    })
    return (
        <h2>{commentsInfo.comments.length} Comments
            <ul>
                {commentList}
            </ul>
        </h2>
    )
}

export default CommentsList;