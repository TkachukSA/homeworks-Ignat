import React from "react";
import Clock from "./Clock";
import s from'./Clock.module.css'

function HW9() {
    return (
        <div className={s.container}>

           <h2>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>


        </div>
    );
}

export default HW9;



