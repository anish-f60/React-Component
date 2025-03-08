import React, { useContext, useState } from "react";
import { CommentsContext } from "./Comments";
import { Heart, MessageCircle } from "lucide-react";
import CommentListItem from "./CommentListItem";

const CommentList = () => {
  const { commentsData } = useContext(CommentsContext);

  if (!commentsData.length) {
    return null;
  }

  return (
    <ul className="w-[500px] flex flex-col gap-1">
      {commentsData
        .filter((comment) => !comment.parentId)
        .map((commentItem, idx) => {
          return (
            <CommentListItem
              key={commentItem.id}
              idx={idx}
              commentItem={commentItem}
            />
          );
        })}
    </ul>
  );
};

export default CommentList;
