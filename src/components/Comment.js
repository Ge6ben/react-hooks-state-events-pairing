import React, { useState } from "react";
import ShowComment from "./ShowComment";
import Sort from "../components/Sort"
export default function Comment({ comments, onDelete , setSortBtn,sortBtn}) {
  const [searchedTxt, setSearchedTxt] = useState("");
 
  const  searchComment = comments.filter((comment) => {
    if (searchedTxt === "") return true;   
   
    return (
      comment.user.toLowerCase().indexOf(searchedTxt.toLocaleLowerCase()) !== -1
    );
  });


  
 
  return (
    <div>
      <hr />
      <input
        onChange={(e) => setSearchedTxt(e.target.value)}
        value={searchedTxt}
        placeholder="Search comments by user"
      />

      
      <button onClick={()=> setSortBtn(true)} >Sort by Like</button>
      {searchComment.map((comment) => (
        
        <ShowComment
          key={comment.id}
          id={comment.id}
          user={comment.user}
          comment={comment.comment}
          onDelete={onDelete}
          like={comment.like}
          disLike={comment.disLike}
        />
      ))
      
      
       }
      
       

      

    </div>
  );
}
