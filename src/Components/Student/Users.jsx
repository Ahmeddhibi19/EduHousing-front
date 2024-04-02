import React, { useState } from 'react'
import Messages from './Messages';
import { messagesList } from "./MessageList";
const profileImage = require("../../Assets/DAB03919-10470989.webp");

const Users = () => {
    const [messages, setMessages] = useState(false);

    const togglemessages = () => {
        setMessages((prev) => !prev);
        console.log(messages)
    }

    return (
        <div className='w-full sm:w-screen md:w-screen lg:w-full h-full sm:h-full md:h-full lg:h-screen  overflow-y-auto'>
            {messages ?
                <div className='w-full h-full  '>
                    <Messages onClose={() => setMessages(false)} messagesList={messagesList} senderId={1} receiverId={2} />
                </div> :
                [...Array(50)].map((_, i) => (
                    <div key={i} className='w-full h-[40px] px-4 flex flex-row cursor-pointer'
                        onClick={() => togglemessages()}
                    >
                        <img
                            src={profileImage}
                            alt=""
                            className="w-[30px] h-[30px] rounded-full mr-3 "
                        />
                        <p className=""> Ahmed Dhibi</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Users