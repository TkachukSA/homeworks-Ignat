import {initialPeopleType} from "../HW8";

export type sortNameUpActionType ={
    type: "sort"
    payload: "up" | "down"
}
/*export type sortNameDownActionType ={
    type: "sort"
    payload: "down"
}*/
export type sortName18plusActionType ={
    type: "check"
    payload: 18
}


export type ActionsType = sortNameUpActionType | sortName18plusActionType

export const homeWorkReducer = (state: initialPeopleType[], action: ActionsType): initialPeopleType[] => {
    switch (action.type) {
        case "sort": {
            const newState = [...state]
            if (action.payload === "up") {
                let resultat = newState.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                return resultat
            }
            if (action.payload === "down") {
                let resultat = newState.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                })
                return resultat
            }
        }


        case "check": {
            const newState = [...state]
            return newState.filter(t=>t.age>18)
        }
        default:
            return state
    }
};