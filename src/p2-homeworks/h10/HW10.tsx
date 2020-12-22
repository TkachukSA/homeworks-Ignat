import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingReducerType} from "./bll/loadingReducer";
import loader from './bll/img/WMD.gif'
import s from './HW10.module.css'

function HW10() {

    let loading= useSelector<AppStoreType, LoadingReducerType>(state=> state.loading)
    let dispatch= useDispatch()



    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 3000)
        console.log("loading...");
    };

    return (
        <div>

            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.item}><img src={loader}/></div>
                ) : (
                    <div className={s.click}>
                        <SuperButton onClick={setLoading}>click me</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
