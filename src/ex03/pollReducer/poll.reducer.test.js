import pollReducer from "./poll.reducer";

describe("Tests for pollReducer", () => {
  // #Test 1
  it("Should handle CREATE_POLL action", () => {
    const initState = { polls: [] };
    const action = {
      type: "CREATE_POLL",
      payload: { id: 1, question: "Testing", options: [] }
    };
    const newState = pollReducer(initState, action);
    expect(newState).toEqual({
      polls: [{ id: 1, question: "Testing", options: [] }]
    });
  });

  // #Test 2
  it("Should handle ADD_OPTION action", () => {
    const initState = {
      polls: [{ id: 1, question: "Testing", options: [] }]
    };

    const action = {
      type: "ADD_OPTION",
      payload: { pollId: 1, optionText: "Testing" }
    };
    const newState = pollReducer(initState, action);
    expect(newState).toEqual({
      polls: [
        {
          id: 1,
          question: "Testing",
          options: [{ text: "Testing", votes: 0 }]
        }
      ]
    });
  });
  // #Test 3
  it("Should handle VOTE action", () => {
    const initState = {
      polls: [
        {
          id: 1,
          question: "Testing",
          options: [{ text: "Testing", votes: 0 }]
        }
      ]
    };

    const action = {
      type: "VOTE",
      payload: { pollId: 1, optionText: "Testing" }
    };
    const newState = pollReducer(initState, action);
    expect(newState).toEqual({
      polls: [
        {
          id: 1,
          question: "Testing",
          options: [{ text: "Testing", votes: 1 }]
        }
      ]
    });
  });
});
