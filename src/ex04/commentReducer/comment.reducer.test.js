import commentReducer from "./comment.reducer";

describe("Tests for commentReducer", () => {
  it("Should be able to handle ADD_COMMENT action", () => {
    const initState = {
      comments: []
    };
    const action = {
      type: "ADD_COMMENT",
      payload: {
        commentId: 1,
        text: "Test Comment",
        votes: 0,
        replies: []
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    });
  });
  it("Should be able to handle REMOVE_COMMENT action", () => {
    const initState = {
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    };
    const action = {
      type: "REMOVE_COMMENT",
      payload: {
        commentId: 1
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: []
    });
  });
  it("Should be able to handle UPVOTE_COMMENT action", () => {
    const initState = {
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    };
    const action = {
      type: "UPVOTE_COMMENT",
      payload: {
        commentId: 1
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 1,
          replies: []
        }
      ]
    });
  });
  it("Should be able to handle DOWNVOTE_COMMENT action", () => {
    const initState = {
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 1,
          replies: []
        }
      ]
    };
    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: {
        commentId: 1
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    });
  });
  it("Should be able to handle ADD_REPLY action", () => {
    const initState = {
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    };
    const action = {
      type: "ADD_REPLY",
      payload: {
        commentId: 1,
        replyId: 1,
        text: "Test reply"
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: [
            {
              replyId: 1,
              text: "Test reply"
            }
          ]
        }
      ]
    });
  });
  it("Should be able to handle REMOVE_REPLY action", () => {
    const initState = {
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: [
            {
              replyId: 1,
              text: "Test reply"
            }
          ]
        }
      ]
    };
    const action = {
      type: "REMOVE_REPLY",
      payload: {
        commentId: 1,
        replyId: 1
      }
    };
    const newState = commentReducer(initState, action);
    expect(newState).toEqual({
      comments: [
        {
          commentId: 1,
          text: "Test Comment",
          votes: 0,
          replies: []
        }
      ]
    });
  });
});
