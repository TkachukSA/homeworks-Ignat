import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, changeThemeCAC, themeReducerType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'purple'];

function HW12() {
    const theme =useSelector<AppStoreType, themeReducerType>(state => state.theme )
    let dispatch = useDispatch()
    ; // useSelector


    const onChangeOption=(color: string)=>{
        dispatch(changeThemeC(color))
    }

    // useDispatch, onChangeCallback


    return (

        <div className={s[theme.color] }>


            <span className={s[theme + '-text']}>
                <div className={s.item}>
                homeworks 12
                    </div>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio

            name={"radio"}
            options={themes}
            value={theme.color}
            onChangeOption={onChangeOption}
            />

            <hr/>
        </div>
    );
}

export default HW12;
