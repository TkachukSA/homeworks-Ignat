import React from "react";
import {AffairType} from "./HW2";
import "./Affairs.module.css"
import s from "../h8/HW8.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }


    return (


        <div >
           {/* <span>name</span>
            <span>priority</span>*/}


            <div className={s.finalPeople}>
                <div className={s.header}>
                    <span>{props.affair.priority}</span>
                    {props.affair.name}
                    <span><button  onClick={()=> deleteCallback(props.affair._id)}>X</button></span>

                </div>

            </div>


        </div>

    );
}

export default Affair;
