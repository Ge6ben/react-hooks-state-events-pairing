import video from "../data/video.js";
import { useState } from "react";
import Video from "./Video.js";
import Comment from "../components/Comment";
import ToggleComment from "./ToggleComment.js";
function App() {
  console.log("Here's your data:", video);

  const [toggleComment, setToggleComment] = useState(false);

  const [vid, setVid] = useState(video);

  const [sortBtn, setSortBtn] = useState(false);
  const [sortedData, setSortedData] = useState(vid.comments);
  function handleDelete(commentID) {
    setVid({
      ...vid,
      comments: vid.comments.filter((comment) => comment.id !== commentID),
    });
  }

  if (sortBtn)  vid.comments.sort((a, b) => a.like - b.like);

  console.log(sortedData);

  return (
    <div className="App">
      <Video {...vid} />

      <ToggleComment
        toggleComment={toggleComment}
        setToggleComment={setToggleComment}
      />

      {toggleComment ? (
        <Comment
          comments={vid.comments}
          onDelete={handleDelete}
          sortBt={sortBtn}
          setSortBtn={setSortBtn}
        />
      ) : null}
    </div>
  );
}
export default App;
