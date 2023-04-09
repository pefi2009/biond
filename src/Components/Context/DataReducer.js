const DataReducer = (state,action) => {
    switch(action.type){
        case 'SET_CLEAR':{
            return {
                ...state,users:[]
            }
        }
        case 'GET_USER':{
            return {
                ...state,
                users:action.payload
            }
        } 
    }
}