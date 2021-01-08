import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {

        const state = restoreState("editable-span-value", value)
        setValue(state)
    };

    return (
        <div className={s.container}>

            <h2>homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div className={s.window}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div >
            <div className={s.borromhw6}>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
            </div>

        </div>
    );
}

export default HW6;
