import React, { useContext, useState } from "react";
import { CommentsContext } from "./Comments";

const CommentForm = () => {
  const [commentInput, setCommentInput] = useState("");

  const { addNewComment } = useContext(CommentsContext);

  return (
    <div className="w-[500px] flex flex-col gap-2 bg-[#F2F2F2] rounded-md p-2.5">
      <textarea
        placeholder="What are your thoughts?"
        onChange={(e) => setCommentInput(e.target.value)}
        className="h-[200px] w-full resize-none outline-none p-2"
      />
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
