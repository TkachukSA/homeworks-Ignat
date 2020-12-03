import {initialPeopleType} from "../HW8";

export type sortNameUpActionType ={
    type: "sort"
    namr: string
    id: number
}


export type ActionsType = sortNameUpActionType

export const homeWorkReducer = (state: initialPeopleType[], action: any): any => {
    switch (action.type) {
        case "sort": {
            const newState = {...state}
            newState

            return state
        }
        case "check": {

            return state
        }
        default: return state
    }
};