import React, { useReducer } from "react";

const initialState = () => ({
  countPages: 1,
  maxCount: 0,
  incrementBy: 0,
});

const reducer = (state = initialState(), action = {}) => {
  if (action.type === "NEXT_PAGE") {
    if (state.countPages < action.maxCount) {
      return {
        ...state,
        maxCount: action.maxCount,
        incrementBy: state.incrementBy + action.incrementBy,
        countPages: state.countPages + 1,
      };
    }
    return { ...state };
  }
  if (action.type === "PREVIOUS_PAGE") {
    if (state.countPages > 1) {
      return {
        ...state,
        maxCount: action.maxCount,
        incrementBy: state.incrementBy - action.incrementBy,
        countPages: state.countPages - 1,
      };
    }
    return { ...state };
  }
  return state;
};

const IndexPage = ({ pageIndex, getAllSongs }) => {
  const [state, dispatch] = useReducer(reducer, reducer());

  const increment = () => {
    dispatch({
      type: "NEXT_PAGE",
      maxCount: pageIndex.pages,
      incrementBy: pageIndex.rows_per_page,
    });
    getAllSongs(state.incrementBy, 10);
  };

  const decrement = () => {
    getAllSongs(state.incrementBy, 10);
    dispatch({
      type: "PREVIOUS_PAGE",
      maxCount: pageIndex.pages,
      incrementBy: pageIndex.rows_per_page,
    });
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-around">
        <button
          onClick={decrement}
          className="w-3/12 px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-200/80 transition-all duration-200 ease-in-out"
        >
          Previous
        </button>
        <p className="w-3/12 text-center px-2 py-1 bg-gray-300 rounded-md">
          Pages: {state.countPages} of {pageIndex.pages}
        </p>
        <button
          onClick={increment}
          className="w-3/12 px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-200/80 transition-all duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { IndexPage };
