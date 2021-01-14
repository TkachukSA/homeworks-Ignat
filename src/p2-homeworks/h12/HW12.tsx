import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, changeThemeCAC, themeReducerType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'purple'];

function HW12() {
    const theme = useSelector<AppStoreType, themeReducerType>(state => state.theme)
    let dispatch = useDispatch()
    ; // useSelector


    const onChangeOption = (color: string) => {
        dispatch(changeThemeC(color))
    }

    // useDispatch, onChangeCallback


    return (
        <div className={s.container}>

            <div className={s[theme.color]}>


            <span className={s[theme + '-text']}>
                <div className={s.item}>
                <h2>homeworks 12</h2>
                    <p>
                      click to select background</p>
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


            </div>

        </div>


    );
}

export default HW12;
