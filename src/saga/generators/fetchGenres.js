import {call, put, takeLatest} from 'redux-saga/effects'
import { fetchError, fetchingData } from '../actions'
//worker fuction
function* workFetchGenres(state){
    try {
        //console.log(state)
        const response=yield call(fetch,'https://data-imdb1.p.rapidapi.com/genres/',{
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b184d67371msh8b3cd5e22e0bcc5p142e66jsn19570dc5f5b3",
                "x-rapidapi-host": "data-imdb1.p.rapidapi.com"
            }
        })
        const data=yield response.json()
        yield put(fetchingData(data.Genres))
    } catch (error) {
        yield put(fetchError)
    }
}

//watcher function

export function* watchFetchGenres(){
    yield takeLatest('FETCH_STARTED',workFetchGenres)
}