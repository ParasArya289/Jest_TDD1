const initialState = {
  products: [
    {
      id: 1,
      name: "Phone",
      category: "Electronics",
      price: 500,
      inStock: true
    },
    { id: 2, name: "Shirt", category: "Clothing", price: 20, inStock: true },
    {
      id: 3,
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      inStock: true
    },
    { id: 4, name: "Jeans", category: "Clothing", price: 40, inStock: false }
    // ... more products
  ],
  filters: {
    category: "All",
    searchQuery: "",
    sortBy: "price",
    ascending: true,
    priceRange: { min: 0, max: 1000 }
  }
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_AVAILABILITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                inStock: !product.inStock
              }
            : product
        )
      };
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case "SET_SORT":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case "SET_PRICE_RANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export default productReducer;
