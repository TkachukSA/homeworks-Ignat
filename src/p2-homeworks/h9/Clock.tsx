import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from'./Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
           setDate(new Date())

        }, 1000);
        setTimerId(id);
        setShow(true)

    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    };
    const onMouseLeave = () => {
        setShow(false)

    };

    const stringTime =  "Time"; // fix with date
    const stringDate = "Date"; // fix with date

    return (
        <div>
            <div className={s.clock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime} : {date?.toLocaleTimeString()}
            </div>



            {show && (
                <div className={s.date}>
                    {stringDate}  : {date?.toLocaleDateString()}
                </div>
            )}
            <div className={s.click}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>



        </div>
    );
}

export default Clock;
