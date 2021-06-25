export const initialState = {
  loading: true,
  genres: null,
  error: "",
};
function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "FETCHED_DATA":
      return {
        ...state,
        loading: false,
        genres: action.genres,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
}

export default MovieReducer;
