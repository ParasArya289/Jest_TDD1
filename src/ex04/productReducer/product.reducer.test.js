import productReducer from "./product.reducer";

describe("Tests for productReducer", () => {
  it("Should be able to handle TOGGLE_AVAILABILITY action", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
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
    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: {
        id: 1
      }
    };
    const newState = productReducer(initialState, action);
    expect(newState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });
  it("Should be able to handle SET_CATEGORY_FILTER action", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
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
    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: {
        category: "Clothing"
      }
    };
    const newState = productReducer(initialState, action);
    expect(newState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "Clothing",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });
  it("Should be able to handle SET_SEARCH_QUERY action", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
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
    const action = {
      type: "SET_SEARCH_QUERY",
      payload: {
        searchQuery: "Jeans"
      }
    };
    const newState = productReducer(initialState, action);
    expect(newState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "Jeans",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });
  it("Should be able to handle SET_SORT action", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
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
    const action = {
      type: "SET_SORT",
      payload: {
        sortBy: "name"
      }
    };
    const newState = productReducer(initialState, action);
    expect(newState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });
  it("Should be able to handle SET_PRICE_RANGE action", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
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
    const action = {
      type: "SET_PRICE_RANGE",
      payload: {
        priceRange: { min: 100, max: 500 }
      }
    };
    const newState = productReducer(initialState, action);
    expect(newState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 100, max: 500 }
      }
    });
  });
});
