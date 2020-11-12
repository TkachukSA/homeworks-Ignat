import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void
    error: string | null // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : s.errorClass
    const bottomClass = error? s.error: s.someClass
    const totaluserstyp =  s.total// need to fix with (?:)


    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} className={bottomClass}>add</button>
            <span className={totaluserstyp}>{totalUsers}</span>


        </div>
    );
}

export default Greeting;
