const initialState = {
  comments: []
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          ({ commentId }) => commentId !== action.payload.commentId
        )
      };
    case "UPVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.commentId === action.payload.commentId
            ? { ...comment, votes: comment.votes + 1 }
            : comment
        )
      };
    case "DOWNVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.commentId === action.payload.commentId
            ? { ...comment, votes: comment.votes - 1 }
            : comment
        )
      };
    case "ADD_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.commentId === action.payload.commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { replyId: action.payload.replyId, text: action.payload.text }
                ]
              }
            : comment
        )
      };
    case "REMOVE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.commentId === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  ({ replyId }) => replyId !== action.payload.replyId
                )
              }
            : comment
        )
      };
    default:
      return state;
  }
}

export default commentReducer;
