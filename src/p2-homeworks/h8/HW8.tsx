import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css"
import {TableCell, TableHead, TableRow} from "@material-ui/core";


export type initialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: initialPeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div className={s.item} key={p._id}>

            <div>{p.name}</div>
            <div>{p.age}</div>

        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortdown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div className={s.container}>

            <h2>homeworks 8</h2>

            <div className={s.finalPeople}>
                <div className={s.header}>
                    <div>name</div>
                    <div>age</div>
                </div>
                {finalPeople}
            </div>

            <div className={s.buttonContainer}>
                <SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.button} onClick={sortdown}>sort down</SuperButton>
                <SuperButton className={s.button} onClick={sort18}>sort 18+</SuperButton>
            </div>


        </div>
    );
}

export default HW8;
