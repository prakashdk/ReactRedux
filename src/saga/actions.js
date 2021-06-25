export const startFetch=()=>{
    return{
        type:'FETCH_STARTED',
    }
}
export const fetchingData=(genres)=>{
    return{
        type:'FETCHED_DATA',
        genres,
    }
}
export const fetchError=()=>{
    return{
        type:'FETCH_ERROR',
    }
}