import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage"
import s from  './HW1.module.css'


const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <div className={s.container}>

           <h2> homeworks 1</h2>

            {/*should work (должно работать)*/}

            <div className={s.item}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            </div>


            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>

        </div>
    );
}

export default HW1;
