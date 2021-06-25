const initialState={
    genres:[],
    loading:false,
    error:false,
}
function GenreReducer(state=initialState,action) {
    switch (action.type) {
        case 'FETCH_STARTED':
                return{
                    ...state,
                    loading:true,
                }
        case 'FETCHED_DATA':
                return{
                    ...state,
                    genres:action.genres,
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

export default GenreReducer
