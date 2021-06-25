import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { startFetch } from '../saga/actions'

function GenreList({fetchGenres}) {
    const {loading,genres,error}=useSelector(state=>state.genres)
    useEffect(()=>fetchGenres(),[fetchGenres])
    return (
        <div>
            <h1>Genres</h1>
            <ul>
                {loading?<CircularProgress/>:
                genres&&genres.map(e=><li>{e.genre}</li>)}
                {error&&<b>Error</b>}
            </ul>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchGenres:()=>dispatch(startFetch()),
    }
}
export default connect(null,mapDispatchToProps)(GenreList)
