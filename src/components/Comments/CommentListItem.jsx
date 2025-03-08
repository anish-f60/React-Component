import { Heart, MessageCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { CommentsContext } from "./Comments";

const CommentListItem = ({ commentItem, idx }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isReplyFormVisible, setIsReplyFormVisible] = useState(false);
  const [isRepliesVisible, setIsRepliesVisible] = useState(false);
  const { likeComment, commentsData, appendNewComment } =
    useContext(CommentsContext);

  function getReplies() {
    return commentsData.filter(
      (comment) => comment.parentId === commentItem.id
    );
  }

  return (
    <li
      key={commentItem.id}
      className={`${idx !== commentsData.length - 1 ? "border-b" : ""} py-2 ${
        commentItem.parentId ? "ml-4" : ""
      }`}
    >
      <p>{commentItem.comment}</p>
      <div className="comment-actions flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button
            className="cursor-pointer"
            onClick={() => likeComment(commentItem.id)}
          >
            <Heart
              size={20}
              fill={`${commentItem.likes ? "#000" : "transparent"}`}
            />
          </button>
          {commentItem.likes && (
            <p className="text-sm text-[#191919] opacity-60">
              {commentItem.likes}
            </p>
          )}
        </div>
        {commentItem.replies.length > 0 && (
          <button
            onClick={() => setIsRepliesVisible((prevState) => !prevState)}
            className="cursor-pointe flex items-center gap-1.5"
          >
            <MessageCircle size={20} className="text-[#191919] opacity-60" />
            <span className="text-sm text-[#191919] opacity-60">
              {commentItem.replies.length} replies
            </span>
          </button>
        )}

        <button
          onClick={() => setIsReplyFormVisible((prevState) => !prevState)}
          className="cursor-pointer text-sm underline"
        >
          Reply
        </button>
      </div>
      {isRepliesVisible && (
        <ul className={`replies-list flex flex-col gap-1`}>
          {getReplies().map((reply, idx) => {
            return (
              <CommentListItem key={reply.id} idx={idx} commentItem={reply} />
            );
          })}
        </ul>
      )}
      {isReplyFormVisible && (
        <div className="mt-10 ">
          <div className="w-full flex flex-col gap-2 bg-[#F2F2F2] rounded-md p-2.5">
            <textarea
              placeholder="What are your thoughts?"
              onChange={(e) => setCommentInput(e.target.value)}
              className="h-[100px] w-full resize-none outline-none p-2"
              value={commentInput}
            />
            <div className="flex items-center gap-4 justify-end">
              <button
                onClick={() => setIsReplyFormVisible(false)}
                className="h-10 px-3 rounded-4xl border"
              >
                Cancel
              </button>
              <button
                disabled={commentInput === ""}
                className="h-10 px-3 rounded-4xl text-white disabled:bg-[#DCDCDC] bg-black transition-colors"
                onClick={() => {
                  if (commentInput) {
                    appendNewComment(commentItem.id, commentInput);
                    setCommentInput("");
                    setIsReplyFormVisible(false);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default CommentListItem;
