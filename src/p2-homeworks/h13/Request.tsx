import React, {ChangeEvent, useEffect, useState} from "react";
import {hwAPI} from "./api/api";
import s from './Request.module.css'


const Request = () => {


    const [state, setState] = useState<any>(null)
    const [checked, setChecked] = useState<boolean>(true)

    const cheeckboxChanged = () => {
        setChecked(!checked)
    }
    useEffect(() => {
        hwAPI.postAPI(checked)
            .then((resp) => {
                setState(resp.data.errorText)
                console.log(resp.data)
            }).catch(error => {
            console.log({...error});
            setState(error.response ? error.response.data.errorText : error.message);
        })

    }, [checked])


    return (
        <div className={s.container}>
            <div className={s.messange}> {JSON.stringify(state)}</div>
            <div className={s.item}>
                <button onClick={cheeckboxChanged}>click</button>
            </div>
            <div className={s.item}>
                <input type={"checkbox"} checked={checked} onChange={cheeckboxChanged}/>
            </div>

        </div>

    )

}
export default Request


/*
const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
    hwAPI.postAPI(checked)
        .then((resp) => {
            setState(resp.data)
            console.log(resp.data)
        }).catch(error => {
        console.log({...error});
        setState(error.response ? error.response.data.errorText : error.message);
    })

}*/
