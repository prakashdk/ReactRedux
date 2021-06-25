export const getGenres = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_STARTED",
    });
    const response = await fetch("https://data-imdb1.p.rapidapi.com/genres/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "182fd0c9dfmsh1e9bc4667e9883cp14c697jsn2bb1c8ad75ae",
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      },
    });
    const genres = await response.json();
    //genres.then((res) =>
    dispatch({
      type: "FETCHED_DATA",
      genres: genres.Genres,
    });
    //);
  } catch (e) {
    dispatch({
      type: "FETCH_ERROR",
      error: e,
    });
  }
};
