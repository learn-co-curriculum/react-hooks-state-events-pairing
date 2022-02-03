import video from "../data/video";

function CommentListItems() {
  const commentList = video.comments.map((comments) => {
    return (
      <CommentListItems
        key={video.comments.id}
        user={video.comments.user}
        comment={video.comments.comment}
      />
    );
  });

  return (
    <div>
      <h3>{video.comments[0].user}</h3>
      <p>{video.comments[0].comment}</p>
      <h3>{video.comments[1].user}</h3>
      <p>{video.comments[1].comment}</p>
    </div>
  );
}
export default CommentListItems;
