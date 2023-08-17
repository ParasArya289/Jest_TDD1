import cartReducer from "./cart.reducer";

describe("Tests for cartReducer", () => {
  // #Test 1
  it("Should handle ADD_DISCOUNT action", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    };
    const action = {
      type: "ADD_DISCOUNT",
      payload: { discount: { id: 1, value: 200 } }
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual({
      items: [],
      totalPrice: -200,
      totalQuantity: 0,
      discounts: [{ id: 1, value: 200 }]
    });
  });

  // #Test 2
  it("Should handle APPLY_PROMOTION action", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    };
    const action = {
      type: "APPLY_PROMOTION",
      payload: { promotion: { id: 1, value: 200 } }
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual({
      items: [],
      totalPrice: -200,
      totalQuantity: 0,
      discounts: [{ id: 1, value: 200 }]
    });
  });
  // #Test 3
  it("Should handle REMOVE_DISCOUNT action", () => {
    const initialState = {
      items: [],
      totalPrice: -200,
      totalQuantity: 0,
      discounts: [{ id: 1, value: 200 }]
    };
    const action = {
      type: "REMOVE_DISCOUNT",
      payload: { discountId: 1 }
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    });
  });
});
