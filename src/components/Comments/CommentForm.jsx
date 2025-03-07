import React, { useContext, useState } from "react";
import { CommentsContext } from "./Comments";

const CommentForm = () => {
  const [commentInput, setCommentInput] = useState("");

  const { addNewComment } = useContext(CommentsContext);

  return (
    <div>
      <textarea onChange={(e) => setCommentInput(e.target.value)} />
      <button
        disabled={commentInput === ""}
        className="h-10 px-3 rounded-4xl text-white disabled:bg-[#DCDCDC] bg-black transition-colors"
        onClick={() => {
          if (commentInput) {
            addNewComment(commentInput);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CommentForm;
