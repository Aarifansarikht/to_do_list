
const initialState = [1232,132] ;
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "CREATETASK": return  {
            ...state
        }
        default: return state
    }
}

export default reducer;