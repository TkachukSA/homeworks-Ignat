import axios from "axios";



const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',

})

type PostHWType={
    
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

export const hwAPI = {

    postAPI: (success: boolean) => {
       // debugger
        let promise = instance.post<PostHWType>(`auth/test`, {success})
        return promise
    },


}
//https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},