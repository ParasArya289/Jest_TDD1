const initialState = {
  bookmarks: []
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(({ id }) => id !== action.payload.id)
      };
    case "ADD_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? { ...bookmark, tags: [...bookmark.tags, action.payload] }
            : bookmark
        )
      };
    case "REMOVE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? {
                ...bookmark,
                tags: bookmark.tags.filter(({ id }) => id !== action.payload.id)
              }
            : bookmark
        )
      };
    case "UPDATE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? {
                ...bookmark,
                tags: bookmark.tags.map((tag) =>
                  tag.id === action.payload.id ? action.payload : tag
                )
              }
            : bookmark
        )
      };
    case "FILTER_BOOKMARKS_BY_TAG":
      return {
        ...state,
        filteredBookmarks: state.bookmarks.filter(({ tags }) =>
          tags.some(({ title }) => action.payload.includeTags.includes(title))
        )
      };
    default:
      return state;
  }
}

export default bookmarkReducer;
