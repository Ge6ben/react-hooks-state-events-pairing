import video from "../data/video.js";
import { useState } from "react";
import Video from "./Video.js";
import CommentsContainer from "./CommentsContainer";
function App() {
  console.log("Here's your data:", video);

  const [toggleComment, setToggleComment] = useState(false);

  const [vid, setVid] = useState(video);

  const [sortBtn, setSortBtn] = useState(false);

  function handleDeleteComment(commentId) {
    setVid({
      ...vid,
      comments: vid.comments.filter((comment) => comment.id !== commentId),
    });
  }

  if (sortBtn) vid.comments.sort((a, b) => a.like - b.like);
  else vid.comments.sort((a, b) => -a.like + b.like);

  return (
    <div className="App">
      <Video
        {...vid}
        setToggleComment={setToggleComment}
        toggleComment={toggleComment}
      />

      {toggleComment ? (
        <CommentsContainer
          comments={vid.comments}
          onDelete={handleDeleteComment}
          sortBtn={sortBtn}
          setSortBtn={setSortBtn}
        />
      ) : null}
    </div>
  );
}
export default App;
