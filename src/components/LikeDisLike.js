import React from "react";

export default function LikeDisLike({ like, setLike, setDisLike, disLike }) {
  return (
    <div>
      <button onClick={() => setLike(like + 1)}> {like}👍</button>
      <button onClick={() => setDisLike(disLike + 1)}>{disLike}👎</button>
    </div>
  );
}
