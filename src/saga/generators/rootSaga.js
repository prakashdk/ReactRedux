import {all, call} from 'redux-saga/effects'
import { watchFetchGenres } from './fetchGenres'
import { fetchWatcher } from './fetchMovies'

function* rootSaga() {
    yield all([call(fetchWatcher),call(watchFetchGenres)])
}

export default rootSaga
