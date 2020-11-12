import React from "react";
import s from "./Message.module.css";

function AlternativeMessage() {
    return (
        <div>
            <div><p className={s.balloon}>
                <span className={s.arrow}>&nbsp;</span>
                <p> <b>Артем</b> <br/>
                npm start нажимал?</p>


            </p></div>
        </div>
    );
}

export default AlternativeMessage;
