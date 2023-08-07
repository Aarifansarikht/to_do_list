export const addtodo = (text)=>{
    return {
        type: "ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            text:text
        }
    }
}

export const deletetodo = (id)=>{
    return {
        type: "DELETE_TODO",
        id
    }
}