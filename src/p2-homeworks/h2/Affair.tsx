import React from "react";
import {AffairType} from "./HW2";
import "./Affairs.module.css"
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
        <div className="someClass">
            <table cellSpacing="2">



                <tr><td>{props.affair._id}</td><td>{props.affair.name}</td><td>{props.affair.priority}</td><button
                    onClick={()=> deleteCallback(props.affair._id)}>X</button> </tr>


            </table>

            {/*     <div><span>{props.affair._id}</span> <span>{props.affair.name}</span> <span>{props.affair.priority}</span>*/}

            {/*<button onClick={()=> deleteCallback(props.affair._id)}>X</button></div>*/}
        </div>
    );
}

export default Affair;
