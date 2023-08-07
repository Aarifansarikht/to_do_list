

const initialState = {
    list:[]
} ;
const todoreducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TODO": 

        const {id,text} = action.payload;
        return{
            ...state,
            list:[...state.list,{id:id,text:text} 
            ]
        }

        case "DELETE_TODO":
        
        const newlist = state.list.filter((element)=>element.id!==action.id)
        return{
            ...state,
            list: newlist
        }


        default: return state
    }
}

export default todoreducer;