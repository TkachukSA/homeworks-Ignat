const initState = false

export type LoadingReducerType =  boolean


export const loadingReducer = (state:LoadingReducerType = initState, action: loadingACType): LoadingReducerType => { // fix any
    switch (action.type) {
        case "LOADING": {
            let statecopy = state
            return statecopy=action.loading;
        }
        default: return state;
    }
};
export type loadingACType={
    type: 'LOADING',
    loading: boolean
}
export const loadingAC = (loading: boolean): loadingACType => ({ type: "LOADING", loading}); // fix any