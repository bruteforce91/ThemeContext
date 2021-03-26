
 const themeReducer = (state,action) =>{
    switch (action.type) {
        case "toggleMode":
            return {...state,dark:!state.dark}
   
        default:
            return state;
    }
}

export default themeReducer