import { call, put, takeLatest } from "redux-saga/effects";

export function* fetchWorker(action) {
  try {
      //console.log(state)
    const response = yield call(
      fetch,
      `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${action.search}/`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "182fd0c9dfmsh1e9bc4667e9883cp14c697jsn2bb1c8ad75ae",
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        },
      }
    );
    const data = yield response.json();
    yield put({ type: "FETCHED_DATA", movies: data.Result });
  } catch (error) {
      //console.log(error);
    yield put({ type: "FETCH_ERROR"});
  }
}
export function* fetchWatcher() {
  yield takeLatest("FETCH_STARTED", fetchWorker);
}
