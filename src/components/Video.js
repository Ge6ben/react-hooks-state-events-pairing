import React,{useState}from "react";
import LikeDisLike from "./LikeDisLike";
export default function Video({
  embedUrl,
  title,
  views,
  createdAt,
  upvotes,
  downvotes,
  
}) {


    const [like, setLike] = useState(upvotes);
    const [disLike, setDisLike] = useState(downvotes);

  return (

    
    
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

      <h1>{title}</h1>

      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <br />

      <LikeDisLike like={like} setLike={setLike}  disLike={disLike} setDisLike={setDisLike} />

     
    </div>
  );
}
