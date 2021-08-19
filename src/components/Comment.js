import React,{useState} from "react";
import VideoLikeDisLike from "./LikeDisLike";
export default function ShowComment({
  user,
  comment,
  onDelete,
  like,
  disLike,
  id
}) {
  const [commentLike, setCommentLike] = useState(like);
  const [commentDisLike, setCommentDisLike] = useState(disLike);
  
  function handleDeleteComment() {
    onDelete(id);
  }
  return (
    <div>
      <h2>{user}</h2>
      <p>{comment}</p>

      <VideoLikeDisLike
        like={commentLike}
        setLike={setCommentLike}
        disLike={commentDisLike}
        setDisLike={setCommentDisLike}
      />
      <button onClick={handleDeleteComment} >Delete Comment</button>
    </div>
  );
}
