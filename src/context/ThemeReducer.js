
const themeReducer = (state,action) =>{
    switch (action.type) {
        case "LightMode":
            return {darkTheme:false}
        case "DarkMode":
            return {darkTheme:true}
        default:
            return state;
    }
}