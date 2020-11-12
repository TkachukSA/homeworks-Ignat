import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => {

        let newUser = {_id: v1(), name: name}
        let newUsers = [newUser, ...users]
        setUsers(newUsers);


    }
    const userclass = s.userclass


    return (
        <div>
            <hr/>
            homeworks 3


            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

            <hr/>
            {users.map(user => <div className={userclass}>{user.name}</div>)}

            <hr/>
        </div>
    );
}

export default HW3;

