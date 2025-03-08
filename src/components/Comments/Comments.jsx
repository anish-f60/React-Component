import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export const CommentsContext = createContext(null);

const Comments = () => {
  const [commentsData, setCommentsData] = useState([]);

  const addNewComment = (value) => {
    setCommentsData((prevComments) => [
      ...prevComments,
      {
        id: uuidv4(),
        comment: value,
        replies: [],
        likes: 0,
        parentId: null,
      },
    ]);
  };

  const likeComment = (id) => {
    const updatedComment = commentsData.map((commentItem) =>
      commentItem.id === id
        ? { ...commentItem, likes: commentItem.likes + 1 }
        : commentItem
    );

    setCommentsData(updatedComment);
  };

  const appendNewComment = (parentId, commentValue) => {
    const body = {
      id: uuidv4(),
      comment: commentValue,
      replies: [],
      likes: 0,
      parentId,
    };

    // setCommentsData((prevComments) => [...prevComments, body]);

    // const updatedComment = commentsData.map((commentItem) =>
    //   commentItem.id === parentId
    //     ? { ...commentItem, replies: [...commentItem.replies, parentId] }
    //     : commentItem
    // );

    // setCommentsData(updatedComment);
    setCommentsData((prevComments) => {
      const updatedComment = prevComments.map((commentItem) =>
        commentItem.id === parentId
          ? { ...commentItem, replies: [...commentItem.replies, parentId] }
          : commentItem
      );
      return [...updatedComment, body];
    });
  };

  return (
    <CommentsContext.Provider
      value={{
        commentsData,
        addNewComment,
        likeComment,
        appendNewComment,
      }}
    >
      <div className="p-5 flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Comments</h1>
        <CommentForm />
        <CommentList />
      </div>
    </CommentsContext.Provider>
  );
};

export default Comments;
