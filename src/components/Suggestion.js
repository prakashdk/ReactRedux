import React from 'react'
import { useSelector } from 'react-redux'
import {CircularProgress} from '@material-ui/core';

function Suggestion() {
    const {movies,loading,error}=useSelector(state=>state.search)
    return (
        <div>
            <ul className="suggest-list">
                {loading?(<CircularProgress/>):movies&&
                movies.slice(0,10).map(e=><li className="suggest" key={e.imdb_id}>{e.title}</li>)}
        
            </ul>
            {error&&<b style={{color:'white'}}>No results found</b>}
                
        </div>
    )
}

export default Suggestion
