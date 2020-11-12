import React from "react";
import s from "./Message.module.css"

export type MessagePropsType ={
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.item} >
      <img src={props.avatar}/>
            <div> {props.name}</div>
            <div>{props.message} </div>
            <div>{props.time} </div>
            <br/>

        </div>
    );
}

export default Message;
