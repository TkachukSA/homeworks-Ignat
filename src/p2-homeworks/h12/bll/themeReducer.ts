const initState:themeReducerType = {
    theme: ['dark', 'red', 'some'],
    color: 'red'
};
export type themeReducerType = {
    theme: string[]
    color: string
}


export const themeReducer = (state: themeReducerType = initState, action: changeThemeCAC): themeReducerType => { // fix any
    switch (action.type) {
        case "THEME-CHANGED": {
            return {...state, color: action.theme};
        }
        default:
            return state;
    }
};
export type changeThemeCAC = { type: "THEME-CHANGED", theme: string }
export const changeThemeC = (theme: string): changeThemeCAC => ({type: "THEME-CHANGED", theme}); // fix any