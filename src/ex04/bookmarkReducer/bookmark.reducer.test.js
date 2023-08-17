import bookmarkReducer from "./bookmark.reducer";

describe("Tests for bookmarkReducer", () => {
  it("Should be able to handle ADD_BOOKMARK action", () => {
    const initState = {
      bookmarks: []
    };
    const action = {
      type: "ADD_BOOKMARK",
      payload: {
        id: 1,
        title: "Test Bookmark",
        URL: "Test URL",
        tags: []
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: [{ id: 1, title: "Test Bookmark", URL: "Test URL", tags: [] }]
    });
  });

  it("Should be able to handle REMOVE_BOOKMARK action", () => {
    const initState = {
      bookmarks: [{ id: 1, title: "Test Bookmark", URL: "Test URL", tags: [] }]
    };
    const action = {
      type: "REMOVE_BOOKMARK",
      payload: {
        id: 1
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: []
    });
  });

  it("Should be able to handle ADD_TAG action", () => {
    const initState = {
      bookmarks: [{ id: 1, title: "Test Bookmark", URL: "Test URL", tags: [] }]
    };
    const action = {
      type: "ADD_TAG",
      payload: {
        id: 1,
        bookmarkId: 1,
        title: "Test Tag"
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [{ id: 1, bookmarkId: 1, title: "Test Tag" }]
        }
      ]
    });
  });

  it("Should be able to handle REMOVE_TAG action", () => {
    const initState = {
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [{ id: 1, bookmarkId: 1, title: "Test Tag" }]
        }
      ]
    };
    const action = {
      type: "REMOVE_TAG",
      payload: {
        id: 1,
        bookmarkId: 1
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: []
        }
      ]
    });
  });

  it("Should be able to handle UPDATE_TAG action", () => {
    const initState = {
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [{ id: 1, bookmarkId: 1, title: "Test Tag" }]
        }
      ]
    };
    const action = {
      type: "UPDATE_TAG",
      payload: {
        id: 1,
        bookmarkId: 1,
        title: "Updated Tag"
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [{ id: 1, bookmarkId: 1, title: "Updated Tag" }]
        }
      ]
    });
  });

  it("Should be able to handle FILTER_BOOKMARKS_BY_TAG action", () => {
    const initState = {
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [
            { id: 1, bookmarkId: 1, title: "Test Tag 1" },
            { id: 2, bookmarkId: 1, title: "Test Tag 2" }
          ]
        },
        {
          id: 2,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [
            { id: 1, bookmarkId: 1, title: "Test Tag 3" },
            { id: 2, bookmarkId: 1, title: "Test Tag 4" }
          ]
        }
      ]
    };
    const action = {
      type: "FILTER_BOOKMARKS_BY_TAG",
      payload: {
        includeTags: ["Test Tag 3"]
      }
    };
    const newState = bookmarkReducer(initState, action);
    expect(newState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [
            { id: 1, bookmarkId: 1, title: "Test Tag 1" },
            { id: 2, bookmarkId: 1, title: "Test Tag 2" }
          ]
        },
        {
          id: 2,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [
            { id: 1, bookmarkId: 1, title: "Test Tag 3" },
            { id: 2, bookmarkId: 1, title: "Test Tag 4" }
          ]
        }
      ],
      filteredBookmarks: [
        {
          id: 2,
          title: "Test Bookmark",
          URL: "Test URL",
          tags: [
            { id: 1, bookmarkId: 1, title: "Test Tag 3" },
            { id: 2, bookmarkId: 1, title: "Test Tag 4" }
          ]
        }
      ]
    });
  });
});
