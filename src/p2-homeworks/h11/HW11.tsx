import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from '../h10/HW10.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const handleChangeValue = (value: number | number[]) => {
        if(Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        } else {
            setValue1(value)
        }

    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.item}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={handleChangeValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.item}>
                <span>{value1}</span>
                <SuperDoubleRange

                    value={[value1,value2]}

                    onChangeRange={handleChangeValue}

                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
