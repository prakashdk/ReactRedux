const initialState={
    search:'',
    movies:[],
    loading:false,
    error:false,
}
function MovieReducer(state=initialState,action) {
    switch (action.type) {
        case 'FETCH_STARTED':
                return{
                    ...state,
                    search:action.search,
                    loading:true,
                }
        case 'FETCHED_DATA':
                return{
                    ...state,
                    movies:action.movies,
                    loading:false,
                }
        case 'FETCH_ERROR':
                return{
                    ...state,
                    loading:false,
                    error:true,
                }
    
        default:
           return{
               ...state,
           }
    }
}

export default MovieReducer
