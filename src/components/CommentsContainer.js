import React, { useState } from "react";
import Comment from "./Comment";

export default function CommentsContainer({
  comments,
  onDelete,
  setSortBtn,
  sortBtn,
}) {
  const [searchedTxt, setSearchedTxt] = useState("");

  const showingComments = comments.filter((comment) => {
    if (searchedTxt === "") return comments;
    return comment.user.toLowerCase().includes(searchedTxt.toLowerCase());
  });
  return (
    <div>
      <hr />

      <input
        placeholder="Search comments by user"
        onChange={(e) => setSearchedTxt(e.target.value)}
        value={searchedTxt}
      />

      <button onClick={()=> setSortBtn((sortBtn) => !sortBtn)}  >{sortBtn?" Sort Like by Ascending": " Sort Like by descending"} </button>

      {showingComments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
          id={comment.id}
          like={comment.like}
          onDelete={onDelete}
          disLike={comment.disLike}
        />
      ))}
    </div>
  );
}
