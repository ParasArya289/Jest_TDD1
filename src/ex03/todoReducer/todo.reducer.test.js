import todoReducer from "./todo.reducer";

describe("Tests for todoReducer", () => {
  // #Test 1
  it("Should handle ADD_TODO action", () => {
    const initState = { todos: [] };
    const action = {
      type: "ADD_TODO",
      payload: { id: 1, text: "Testing", completed: false }
    };
    const newState = todoReducer(initState, action);
    expect(newState).toEqual({
      todos: [{ id: 1, text: "Testing", completed: false }]
    });
  });
  // #Test 2
  it("Should handle TOGGLE_TODO action", () => {
    const initState = {
      todos: [{ id: 1, text: "Testing", completed: false }]
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: { id: 1 }
    };
    const newState = todoReducer(initState, action);
    expect(newState).toEqual({
      todos: [{ id: 1, text: "Testing", completed: true }]
    });
  });
});
